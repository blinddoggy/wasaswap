import React, { useState, useCallback } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useConnection, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import {
    PublicKey,
    Transaction,
    SystemProgram
} from '@solana/web3.js';
import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';

const EnviarSol = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction, connect, connecting, connected } = useWallet();
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [endpoint, setEndpoint] = useState('https://api.devnet.solana.com');

    const handleSendSOL = useCallback(async () => {
        if (!publicKey) {
            setMessage('Por favor, conecta tu billetera primero');
            return;
        }

        try {
            const connection = new Connection(endpoint, 'confirmed');
            const recipientPublicKey = new PublicKey(recipient);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: parseFloat(amount) * 1000000000, // convertir SOL a lamports
                })
            );

            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');

            setMessage(`Transacción exitosa: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
        } catch (error) {
            console.error(error);
            setMessage('Error durante la transacción: ' + error.message);
        }
    }, [publicKey, recipient, amount, endpoint, sendTransaction]);

    return (
        <Box className="flex flex-col items-center justify-center p-4 text-white bg-gray-800">
            <WalletMultiButton />
            <Typography variant="h5" gutterBottom>
                Enviar SOL
            </Typography>
            <TextField
                label="Dirección del receptor"
                variant="outlined"
                fullWidth
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Cantidad (SOL)"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="RPC Endpoint"
                variant="outlined"
                fullWidth
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendSOL}
                disabled={!connected}
                sx={{ marginTop: 2 }}
            >
                Enviar SOL
            </Button>
            <Typography variant="body1" gutterBottom>
                {message}
            </Typography>
        </Box>
    );
};

const App = () => {
    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={'https://purple-tiniest-field.solana-mainnet.quiknode.pro/46c916c7e3b820ed947dad518d7295ce67907d1e/'}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <EnviarSol />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
