import React from 'react';
import FrameComponent1 from "../components/frame-component11";
import FrameComponent2 from "../components/frame-component21";
import Tokenomics from "../components/tokenomics";
import Roadmap from "../components/roadmap";
import Footer from "../components/footer";
import Connect from "../components/enviarsol";
import SolanaWalletComponent from "../components/SolanaWalletComponent"; // Importa el componente SolanaWalletComponent

const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-5 px-0 pb-0 box-border opacity-[0.99] leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <FrameComponent2 />
      <Connect />  {/* Añade el componente SolanaWalletComponent */}
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Desktop;
