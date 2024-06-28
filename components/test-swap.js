import React, { useState, useCallback } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';

const TestSwap = ({ className = '' }) => {
    const wallet = useWallet();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [solBalance, setSolBalance] = useState('');
    const [usdtBalance, setUsdtBalance] = useState('');

    const handleGetSOLBalance = useCallback(async () => {
        if (!wallet.connected) {
            setMessage('Por favor, conecta tu billetera primero');
            return;
        }

        try {
            const connection = new Connection('https://purple-tiniest-field.solana-mainnet.quiknode.pro/46c916c7e3b820ed947dad518d7295ce67907d1e/', 'confirmed');
            const balance = await connection.getBalance(wallet.publicKey);
            setSolBalance((balance / 1000000000).toFixed(2)); // convertir lamports a SOL
        } catch (error) {
            console.error(error);
            setMessage('Error al obtener el balance de SOL: ' + error.message);
        }
    }, [wallet]);

    const handleGetUSDTBalance = useCallback(async () => {
        if (!wallet.connected) {
            setMessage('Por favor, conecta tu billetera primero');
            return;
        }

        try {
            const connection = new Connection('https://urple-tiniest-field.solana-mainnet.quiknode.pro/46c916c7e3b820ed947dad518d7295ce67907d1e/', 'confirmed');
            const USDT_MINT_ADDRESS = 'Es9vMFrzaCERkTVgYp2iGdZpVhZhVQZa1oKLkFnGXVCf'; // Dirección del contrato de USDT en Solana
            const tokenAccounts = await connection.getParsedTokenAccountsByOwner(wallet.publicKey, { mint: new PublicKey(USDT_MINT_ADDRESS) });
            const tokenAccountInfo = tokenAccounts.value[0].account.data.parsed.info;
            const balance = tokenAccountInfo.tokenAmount.uiAmount;
            setUsdtBalance(balance);
        } catch (error) {
            console.error(error);
            setMessage('Error al obtener el balance de USDT: ' + error.message);
        }
    }, [wallet]);

    return (
        <Box className={`flex flex-col items-center justify-center p-4 text-white ${className}`} style={{ backgroundColor: '#2c2c2c' }}>
            <WalletMultiButton />
            <Typography variant="h6" gutterBottom>
                {message}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {wallet.connected ? `Conectado: ${wallet.publicKey.toBase58()}` : 'No conectado'}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGetSOLBalance}
                sx={{ marginTop: 2 }}
            >
                Obtener Balance de SOL
            </Button>
            {solBalance && (
                <Typography variant="body1" gutterBottom>
                    Balance de SOL: {solBalance}
                </Typography>
            )}
            <Button
                variant="contained"
                color="primary"
                onClick={handleGetUSDTBalance}
                sx={{ marginTop: 2 }}
            >
                Obtener Balance de USDT
            </Button>
            {usdtBalance && (
                <Typography variant="body1" gutterBottom>
                    Balance de USDT: {usdtBalance}
                </Typography>
            )}
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
