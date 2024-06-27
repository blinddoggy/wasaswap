import React, { useMemo, useCallback } from 'react';
import {
  createDefaultAuthorizationResultCache,
  SolanaMobileWalletAdapter,
} from '@solana-mobile/wallet-adapter-mobile';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';

require('@solana/wallet-adapter-react-ui/styles.css');

const SolanaWalletComponent = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
};

const Context = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        appIdentity: { name: 'Solana Create React App Starter App' },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
      }),
      new PhantomWalletAdapter(),
      
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content = () => {
  return (
    <div className="App">
      <WalletMultiButton />
      <SendTransaction />
    </div>
  );
};

const SendTransaction = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      console.error('error', 'Wallet not connected!');
      return;
    }

    let signature = '';
    try {
      const transaction = new Transaction().add(
        new TransactionInstruction({
          data: Buffer.from(
            'Hello, from the Solana Wallet Adapter example app!'
          ),
          keys: [],
          programId: new PublicKey(
            'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'
          ),
        })
      );

      signature = await sendTransaction(transaction, connection);
      console.info('info', 'Transaction sent:', signature);

      await connection.confirmTransaction(signature, 'processed');
      console.info('success', 'Transaction successful!', signature);
    } catch (error) {
      console.error(
        'error',
        `Transaction failed! ${error?.message}`,
        signature
      );
      return;
    }
  }, [publicKey, connection, sendTransaction]);

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Send Transaction (devnet)
    </button>
  );
};

export default SolanaWalletComponent;
