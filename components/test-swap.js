import React, { useState, useEffect, useCallback } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const TestSwap = ({ className = '' }) => {
    const wallet = useWallet();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleTest = useCallback(async () => {
        if (!wallet.connected) {
            setMessage('Please connect your wallet first');
            return;
        }

        setIsLoading(true);
        try {
            const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
            const recipientPublicKey = new PublicKey('RECIPIENT_WALLET_ADDRESS'); // Tu billetera de recolección

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: 1000000, // cantidad en lamports (1 lamport = 0.000000001 SOL)
                })
            );

            const signature = await wallet.sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');

            setMessage(`Transaction successful: https://explorer.solana.com/tx/${signature}?cluster=mainnet-beta`);
        } catch (error) {
            console.error(error);
            setMessage('Error during transaction: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, [wallet]);

    return (
        <Box className={`flex flex-col items-center justify-center p-4 ${className}`}>
            <WalletMultiButton />
            <Typography variant="h6" gutterBottom>
                {message}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {wallet.connected ? `Connected: ${wallet.publicKey.toBase58()}` : 'Not Connected'}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleTest}
                disabled={isLoading}
            >
                {isLoading ? 'Processing...' : 'Test Transaction'}
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
