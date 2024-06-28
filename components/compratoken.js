import React, { useState, useCallback } from 'react';
import { Button, TextField, Box, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { PublicKey, Transaction } from '@solana/web3.js';
import axios from 'axios';
import '@solana/wallet-adapter-react-ui/styles.css';

const CompraToken = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction, connect, connected } = useWallet();
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConnect = useCallback(async () => {
        if (!connected) {
            try {
                await connect();
                setMessage('Billetera conectada con éxito');
                setSnackbarOpen(true);
            } catch (error) {
                console.error('Error al conectar la billetera:', error);
                setMessage('Error al conectar la billetera');
                setSnackbarOpen(true);
            }
        }
    }, [connect, connected]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleBuyToken = useCallback(async () => {
        if (!publicKey) {
            setMessage('Por favor, conecta tu billetera primero');
            setSnackbarOpen(true);
            return;
        }

        setLoading(true);

        try {
            // Obtener la mejor cotización de Jupiter
            const response = await axios.get(`https://quote-api.jup.ag/v1/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=asyvdzKqaHzopHa5XeNDN7ZYPDVEArD4ZfDZQt4sDHX&amount=${amount * 1000000}&slippage=1`);
            const quote = response.data.data[0];
            const { inAmount, outAmount, feeAmount, swapTransaction } = quote;

            const transaction = Transaction.from(Buffer.from(swapTransaction, 'base64'));

            // Agregar las firmas y enviar la transacción
            transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
            transaction.feePayer = publicKey;

            const signedTransaction = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signedTransaction, 'confirmed');

            setMessage(`Compra exitosa: https://explorer.solana.com/tx/${signedTransaction}?cluster=mainnet-beta`);
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error durante la compra:', error);
            setMessage(`Error durante la compra: ${error.message}`);
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    }, [publicKey, amount, connection, sendTransaction]);

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
                onClick={handleBuyToken}
                disabled={!connected || loading}
                sx={{ marginTop: 2 }}
            >
                {loading ? <CircularProgress size={24} /> : 'Comprar Token'}
            </Button>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

const App = () => {
    const network = 'mainnet-beta'; // Cambiar a 'mainnet-beta' para mainnet
    const endpoint = 'https://silent-palpable-vineyard.solana-mainnet.quiknode.pro/f1167cb94d7a775a454bbba313ba69e9222ee3e7'; // O reemplazar con tu endpoint de QuickNode

    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <CompraToken />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
