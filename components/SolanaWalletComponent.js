import React, { useMemo, useCallback, useState } from 'react';
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
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

require('@solana/wallet-adapter-react-ui/styles.css');

const SolanaWalletComponent = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
};

const Context = ({ children }) => {
  const [rpcUrl, setRpcUrl] = useState(clusterApiUrl(WalletAdapterNetwork.Mainnet));

  const handleRpcChange = (event) => {
    setRpcUrl(event.target.value);
  };

  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        appIdentity: { name: 'Solana Create React App Starter App' },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
      }),
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <div>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="RPC URL"
          value={rpcUrl}
          onChange={handleRpcChange}
          style={{ padding: '10px', width: '300px' }}
        />
      </div>
      <ConnectionProvider endpoint={rpcUrl}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

const Content = () => {
  return (
    <div className="App" style={{ textAlign: 'center', margin: '20px' }}>
      <WalletMultiButton />
      <SendTransaction />
    </div>
  );
};

const SendTransaction = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const onClick = useCallback(async () => {
    if (!publicKey) {
      console.error('error', 'Wallet not connected!');
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(recipient),
          lamports: parseFloat(amount) * 1e9, // Convert SOL to lamports
        })
      );

      const signature = await sendTransaction(transaction, connection);
      console.info('info', 'Transaction sent:', signature);

      await connection.confirmTransaction(signature, 'processed');
      console.info('success', 'Transaction successful!', signature);
    } catch (error) {
      console.error('error', `Transaction failed! ${error?.message}`);
      return;
    }
  }, [publicKey, connection, sendTransaction, recipient, amount]);

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Recipient Public Key"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '300px' }}
      />
      <br />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '300px' }}
      />
      <br />
      <button
        onClick={onClick}
        disabled={!publicKey}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Send Transaction
      </button>
    </div>
  );
};

export default SolanaWalletComponent;
