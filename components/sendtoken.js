import React, { useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import { Connection, PublicKey } from '@solana/web3.js';
import * as bs58 from 'bs58';
import * as SPL from '@solana/spl-token';

const SendToken = ({ className = '' }) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [mint, setMint] = useState('');
    const [feePayer, setFeePayer] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendToken = async () => {
        setIsLoading(true);
        try {
            const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
            const payer = bs58.decode(secretKey);
            const feePayerKey = bs58.decode(feePayer);
            const receiver = new PublicKey(recipient);
            const mintAddress = new PublicKey(mint);

            const fromTokenAccount = await SPL.getOrCreateAssociatedTokenAccount(
                connection,
                feePayerKey,
                mintAddress,
                payer
            );

            const toTokenAccount = await SPL.getOrCreateAssociatedTokenAccount(
                connection,
                feePayerKey,
                mintAddress,
                receiver
            );

            const transactionSignature = await SPL.transfer(
                connection,
                feePayerKey,
                fromTokenAccount.address,
                toTokenAccount.address,
                payer.publicKey,
                parseFloat(amount) * Math.pow(10, 9), // Assuming the amount is in SOL
                [feePayerKey, payer]
            );

            setMessage(`Transfer successful: https://explorer.solana.com/tx/${transactionSignature}?cluster=mainnet-beta`);
        } catch (error) {
            console.error(error);
            setMessage('Error during transaction: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box className={`flex flex-col items-center justify-center p-4 ${className}`} sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
            <Typography variant="h6" gutterBottom>
                {message}
            </Typography>
            <TextField
                label="Recipient Address"
                variant="outlined"
                fullWidth
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="Secret Key"
                variant="outlined"
                fullWidth
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="Mint"
                variant="outlined"
                fullWidth
                value={mint}
                onChange={(e) => setMint(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="Fee Payer"
                variant="outlined"
                fullWidth
                value={feePayer}
                onChange={(e) => setFeePayer(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'black' } }}
                InputProps={{ style: { color: 'black' } }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendToken}
                disabled={isLoading}
                sx={{ marginTop: 2 }}
            >
                {isLoading ? 'Processing...' : 'Send Token'}
            </Button>
        </Box>
    );
};

export default SendToken;
