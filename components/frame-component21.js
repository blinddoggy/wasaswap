import PropTypes from "prop-types";
import { motion } from "framer-motion";

const wallets = [
  { name: "Binance", imgSrc: "/binance-wallet.svg" },
  { name: "Coinbase", imgSrc: "/coinbase.svg" },
  { name: "Metamask", imgSrc: "/metamask.svg" },
  { name: "Coin98", imgSrc: "/coin98.svg" },
  { name: "Wallet Connect", imgSrc: "/walletconnect.svg" },
  { name: "Brave", imgSrc: "/brave.svg" },
  { name: "Phantom", imgSrc: "/phantom2.svg" }
];

const FrameComponent2 = ({ className = "" }) => {
  const containerVariantsLeftToRight = {
    animate: {
      x: ["-100%", "0%"], // Move from -100% to 0%
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Duration for the full loop
          ease: "linear"
        }
      }
    }
  };

  const containerVariantsRightToLeft = {
    animate: {
      x: ["0%", "-100%"], // Move from 0% to -100%
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Duration for the full loop
          ease: "linear"
        }
      }
    }
  };

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center pt-0 px-5 pb-[150px] box-border w-full text-left text-xl text-gray-400 font-space-grotesk mq825:pb-[97px] mq825:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-start gap-[50px] max-w-full mq450:gap-[25px]">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[589px] flex flex-col items-center justify-start max-w-full">
            <b className="w-[510px] relative leading-[24px] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
              buy
            </b>
            <h1 className="m-0 self-stretch relative text-61xl leading-[80px] text-green font-inherit mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
              <span className="font-light">{`buy `}</span>
              <b>{`wasaa `}</b>
              <span className="font-light">on...</span>
            </h1>
          </div>
        </div>

        {/* First Carousel: Right to Left */}
        <div className="overflow-hidden w-full relative">
          <motion.div
            className="flex flex-row items-start justify-start gap-4 w-full"
            variants={containerVariantsRightToLeft}
            animate="animate"
          >
            {wallets.concat(wallets).map((wallet, index) => (
              <div
                key={`top-${index}`}
                className="w-[210px] flex flex-col items-center justify-start py-[38px] px-[34px] gap-[10px] rounded-21xl box-border overflow-hidden shrink-0 relative"
                style={{
                  backgroundImage: "url('/textura-11@2x.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="flex flex-row items-start justify-start py-0 px-[30px] z-[2]">
                  <img
                    className="h-20 w-20 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt={wallet.name}
                    src={wallet.imgSrc}
                  />
                </div>
                <div className="self-stretch relative leading-[40px] font-medium z-[2] text-white">
                  {wallet.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Carousel: Left to Right */}
        <div className="overflow-hidden w-full relative mt-10">
          <motion.div
            className="flex flex-row items-start justify-start gap-4 w-full"
            variants={containerVariantsLeftToRight}
            animate="animate"
          >
            {wallets.concat(wallets).map((wallet, index) => (
              <div
                key={`bottom-${index}`}
                className="w-[210px] flex flex-col items-center justify-start py-[38px] px-[34px] gap-[10px] rounded-21xl box-border overflow-hidden shrink-0 relative"
                style={{
                  backgroundImage: "url('/textura-11@2x.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="flex flex-row items-start justify-start py-0 px-[30px] z-[2]">
                  <img
                    className="h-20 w-20 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt={wallet.name}
                    src={wallet.imgSrc}
                  />
                </div>
                <div className="self-stretch relative leading-[40px] font-medium z-[2] text-white">
                  {wallet.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
