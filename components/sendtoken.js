import React, { useState, useCallback } from 'react';
import { Button, TextField, Box, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { PublicKey, Transaction, SystemProgram , Keypair} from '@solana/web3.js';
import * as SPL from '@solana/spl-token';
import { clusterApiUrl } from '@solana/web3.js';
import bs58 from 'bs58';
import '@solana/wallet-adapter-react-ui/styles.css';

const EnviarToken = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction, connect, connected } = useWallet();
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [mint, setMint] = useState('');
    const [secretKey, setSecretKey] = useState('');
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

    const handleSendToken = useCallback(async () => {
        if (!publicKey) {
            setMessage('Por favor, conecta tu billetera primero');
            setSnackbarOpen(true);
            return;
        }

        setLoading(true);

        try {
            const payer = Keypair.fromSecretKey(bs58.decode(secretKey));
            const receiver = new PublicKey(recipient);
            const mintAddress = new PublicKey(mint);

            const fromTokenAccount = await SPL.getOrCreateAssociatedTokenAccount(
                connection,
                payer,
                mintAddress,
                payer.publicKey
            );

            const toTokenAccount = await SPL.getOrCreateAssociatedTokenAccount(
                connection,
                payer,
                mintAddress,
                receiver
            );

            const transaction = new Transaction().add(
                SPL.createTransferInstruction(
                    fromTokenAccount.address,
                    toTokenAccount.address,
                    payer.publicKey,
                    amount * 1000000, // Ajusta según la cantidad de decimales de tu token
                    [],
                    SPL.TOKEN_PROGRAM_ID
                )
            );

            const { blockhash } = await connection.getRecentBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            const signedTransaction = await sendTransaction(transaction, connection);

            setMessage('Transacción enviada, esperando confirmación...');
            setSnackbarOpen(true);

            await connection.confirmTransaction(signedTransaction, { commitment: 'confirmed', maxRetries: 3 });

            setMessage(`Transacción exitosa: https://explorer.solana.com/tx/${signedTransaction}?cluster=mainnet-beta`);
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error durante la transacción:', error);
            setMessage(`Error durante la transacción: ${error.message}`);
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    }, [publicKey, recipient, amount, secretKey, mint, connection, sendTransaction]);

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
                label="Cantidad (WAZAA)"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Mint Address"
                variant="outlined"
                fullWidth
                value={mint}
                onChange={(e) => setMint(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <TextField
                label="Clave secreta"
                variant="outlined"
                fullWidth
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                margin="normal"
                type="password"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendToken}
                disabled={!connected || loading}
                sx={{ marginTop: 2 }}
            >
                {loading ? <CircularProgress size={24} /> : 'Enviar WAZAA'}
            </Button>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

const EnviarTokenPage = () => {
    const network = 'mainnet-beta'; // Cambiar a 'mainnet-beta' para mainnet
    const endpoint = 'https://silent-palpable-vineyard.solana-mainnet.quiknode.pro/f1167cb94d7a775a454bbba313ba69e9222ee3e7'; // O reemplazar con tu endpoint de QuickNode

    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <EnviarToken />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default EnviarTokenPage;
