import React, { useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl} from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import '@solana/wallet-adapter-react-ui/styles.css';

const Connect = () => {
  const network = WalletAdapterNetwork.Devnet; // Puede ser 'devnet', 'testnet' o 'mainnet-beta'
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="connect-component">
            <WalletMultiButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Connect;
