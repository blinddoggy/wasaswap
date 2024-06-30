import React from 'react';
import FrameComponent1 from "../components/frame-component11";
import FrameComponent2 from "../components/frame-component21";
import Tokenomics from "../components/tokenomics";
import Roadmap from "../components/roadmap";
import Footer from "../components/footer";
import Connect from "../components/enviarsol";
import EnviarToken2022 from "../components/EnviarToken2022"; // Ensure correct import path

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

const Desktop = () => {
  const network = 'mainnet-beta'; // Change to 'mainnet-beta' for mainnet
  const endpoint = 'https://silent-palpable-vineyard.solana-mainnet.quiknode.pro/f1167cb94d7a775a454bbba313ba69e9222ee3e7'; // Or replace with your QuickNode endpoint

  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border opacity-[0.99] leading-[normal] tracking-[normal]">
            <FrameComponent1 />
            <FrameComponent2 />
            
            <EnviarToken2022 />
            <Tokenomics />
            <Roadmap />
            <Footer />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Desktop;
