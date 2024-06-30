import React, { useState, useCallback } from 'react';
import { Button, TextField, Box, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import { useWallet, ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Connection, Keypair, PublicKey } from '@solana/web3.js'; // Asegúrate de importar PublicKey aquí
import { getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';
import bs58 from 'bs58';
import '@solana/wallet-adapter-react-ui/styles.css';

const EnviarToken = () => {
    const { publicKey, connect, connected } = useWallet();
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Reemplaza estas variables con tus claves privadas en formato base58
    const PRIVATE_KEY = Uint8Array.from(bs58.decode('2oPUanXZpzpqw59Ny3cAg6g3zSPvgxbY3oR176quy5w88C6RBYLZQvgkcim66aZ8iKr1PqnfwMuQyzmfYJgSUyn2'));
    const FEEPAYER_PRIVATE_KEY = Uint8Array.from(bs58.decode('2oPUanXZpzpqw59Ny3cAg6g3zSPvgxbY3oR176quy5w88C6RBYLZQvgkcim66aZ8iKr1PqnfwMuQyzmfYJgSUyn2'));

    // Token mint predeterminado
    const MINT_ADDRESS = new PublicKey('asyvdzKqaHzopHa5XeNDN7ZYPDVEArD4ZfDZQt4sDHX');

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
            // Conectar al clúster usando el endpoint de QuickNode
            const connection = new Connection('https://silent-palpable-vineyard.solana-mainnet.quiknode.pro/f1167cb94d7a775a454bbba313ba69e9222ee3e7', 'confirmed');

            // Cargar el Keypair a partir de la clave privada
            const fromWallet = Keypair.fromSecretKey(PRIVATE_KEY);
            const feePayer = Keypair.fromSecretKey(FEEPAYER_PRIVATE_KEY);

            // Generar un nuevo wallet para recibir los tokens recién acuñados
            const toWalletPublicKey = new PublicKey(recipient);

            // Obtener la cuenta de token del fromWallet y crearla si no existe
            const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                fromWallet,
                MINT_ADDRESS,
                fromWallet.publicKey
            );

            // Obtener la cuenta de token del toWallet y crearla si no existe
            const toTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                fromWallet,
                MINT_ADDRESS,
                toWalletPublicKey
            );

            // Acuñar 1 nuevo token en la cuenta "fromTokenAccount" que acabamos de crear
            await mintTo(
                connection,
                fromWallet,
                MINT_ADDRESS,
                fromTokenAccount.address,
                fromWallet.publicKey,
                1000000000,
                [feePayer] // Usamos el feePayer para pagar las tarifas de la acuñación
            );

            // Transferir el nuevo token a la cuenta "toTokenAccount" que acabamos de crear
            const signature = await transfer(
                connection,
                fromWallet,
                fromTokenAccount.address,
                toTokenAccount.address,
                fromWallet.publicKey,
                50,
                [fromWallet, feePayer] // Usamos el feePayer para pagar las tarifas de la transferencia
            );

            setMessage(`Transacción exitosa: ${signature}`);
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error durante la transacción:', error);
            setMessage(`Error durante la transacción: ${error.message}`);
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    }, [publicKey, recipient]);

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
