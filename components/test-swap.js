import React, { useState, useCallback } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles that can be overridden by your app

const TestSwap = ({ className = '' }) => {
    const wallet = useWallet();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const handleSendSOL = useCallback(async () => {
        if (!wallet.connected) {
            setMessage('Please connect your wallet first');
            return;
        }

        setIsLoading(true);
        try {
            const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
            const recipientPublicKey = new PublicKey(recipient);

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: parseFloat(amount) * 1000000000, // convert SOL to lamports
                })
            );

            const { signature } = await wallet.sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');

            setMessage(`Transaction successful: https://explorer.solana.com/tx/${signature}?cluster=mainnet-beta`);
        } catch (error) {
            console.error(error);
            setMessage('Error during transaction: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, [wallet, recipient, amount]);

    return (
        <Box className={`flex flex-col items-center justify-center p-4 text-white ${className}`}>
            <WalletMultiButton />
            <Typography variant="h6" gutterBottom>
                {message}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {wallet.connected ? `Connected: ${wallet.publicKey.toBase58()}` : 'Not Connected'}
            </Typography>
            <TextField
                label="Recipient Address"
                variant="outlined"
                fullWidth
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Amount (SOL)"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendSOL}
                disabled={isLoading}
                sx={{ marginTop: 2 }}
            >
                {isLoading ? 'Processing...' : 'Send SOL'}
            </Button>
        </Box>
    );
};

const App = () => {
    const wallets = [
        new PhantomWalletAdapter(),
    ];

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <TestSwap />
            </WalletModalProvider>
        </WalletProvider>
    );
};

export default App;
