import React, { useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';

const SendTransaction = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      console.error('Error', '¡Billetera no conectada!');
      return;
    }

    let signature = '';
    try {
      const transaction = new Transaction().add(
        new TransactionInstruction({
          data: Buffer.from(
            '¡Hola, desde la app de ejemplo de Solana Wallet Adapter!'
          ),
          keys: [],
          programId: new PublicKey(
            'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'
          ),
        })
      );

      signature = await sendTransaction(transaction, connection);
      console.info('Info', 'Transacción enviada:', signature);

      await connection.confirmTransaction(signature, 'processed');
      console.info('Éxito', '¡Transacción exitosa!', signature);
    } catch (error) {
      console.error(
        'Error',
        `¡Transacción fallida! ${error?.message}`,
        signature
      );
      return;
    }
  }, [publicKey, connection, sendTransaction]);

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Enviar Transacción (devnet)
    </button>
  );
};

export default SendTransaction;
