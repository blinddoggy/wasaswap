import React, { useState, useCallback } from 'react';
import { Button, TextField, Box, Typography, Snackbar, Alert } from '@mui/material';
import { useConnection, useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

const ConnectPhantom = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction, connect, connected } = useWallet();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleConnect = useCallback(async () => {
        if (!connected) {
            try {
                await connect();
                setSnackbarOpen(true);
            } catch (error) {
                console.error('Error connecting to wallet:', error);
            }
        }
    }, [connect, connected]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSendSOL = useCallback(async () => {
        if (!publicKey) {
            setMessage('Por favor, conecta tu billetera primero');
            return;
        }

        try {
            const recipientPublicKey = new PublicKey(recipient);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: parseFloat(amount) * 1000000000, // convertir SOL a lamports
                })
            );

            const { blockhash } = await connection.getRecentBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            const signedTransaction = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signedTransaction, 'confirmed');

            setMessage(`Transacción exitosa: https://explorer.solana.com/tx/${signedTransaction}?cluster=devnet`);
        } catch (error) {
            console.error(error);
            setMessage('Error durante la transacción: ' + error.message);
        }
    }, [publicKey, recipient, amount, connection, sendTransaction]);

    return (
        <Box className="flex flex-col items-center justify-center p-4 text-white bg-gray-800">
            <WalletMultiButton />
            <Typography variant="h6" gutterBottom>
                {connected ? `Conectado: ${publicKey.toBase58()}` : 'No conectado'}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleConnect} disabled={connected}>
                Conectar Billetera Phantom
            </Button>
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
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendSOL}
                disabled={!connected}
                sx={{ marginTop: 2 }}
            >
                Enviar SOL
            </Button>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    Billetera conectada con éxito!
                </Alert>
            </Snackbar>
            <Typography variant="body1" gutterBottom>
                {message}
            </Typography>
        </Box>
    );
};

const App = () => {
    const network = 'mainnet-beta'; // Cambiar a 'mainnet-beta' para mainnet
    const endpoint = 'https://silent-palpable-vineyard.solana-mainnet.quiknode.pro/f1167cb94d7a775a454bbba313ba69e9222ee3e7'; // Reemplaza con tu endpoint de QuickNode

    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <ConnectPhantom />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
