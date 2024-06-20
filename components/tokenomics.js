import ToggleHeader from "./toggle-header";
import PropTypes from "prop-types";

const Tokenomics = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[120px] box-border max-w-full text-left text-xl text-gray-400 font-space-grotesk lg:pb-[78px] lg:box-border mq450:pb-[51px] mq450:box-border ${className}`}
    >
      <div className="flex-1 rounded-21xl bg-black1 box-border overflow-hidden flex flex-row items-start justify-end py-[117px] px-[115px] relative max-w-full border-[1px] border-solid border-gray-100 mq450:py-[49px] mq450:px-5 mq450:box-border mq825:py-[76px] mq825:px-[57px] mq825:box-border">
        <div className="w-[555px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[1] mq825:gap-[20px]">
          <div className="w-[510px] flex flex-col items-start justify-start max-w-full">
            <b className="self-stretch relative leading-[24px] mq450:text-base mq450:leading-[19px]">
              tokenomics
            </b>
            <h1 className="m-0 relative text-61xl leading-[80px] font-light font-inherit text-purple inline-block max-w-full mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
              tokenomics
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center max-w-full text-13xl text-purple">
            <div className="self-stretch box-border flex flex-col items-center justify-center max-w-full border-b-[1px] border-solid border-purple">
              <ToggleHeader
                prop="60%"
                liquidity="Liquidity"
                remove="/remove.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-start py-5 px-[22px] box-border max-w-full text-base text-white font-archivo">
                <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-light inline-block max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse bibendum tincidunt volutpat. Pellentesque mattis
                  turpis neque, non lacinia ligula blandit faucibus.
                </div>
              </div>
            </div>
            <ToggleHeader
              prop="15%"
              liquidity="Marketing"
              remove="/add1.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="123px"
              propBackgroundColor="unset"
            />
            <ToggleHeader
              prop="10%"
              liquidity="Ecosystem"
              remove="/add1.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="132px"
              propBackgroundColor="unset"
            />
            <ToggleHeader
              prop="10%"
              liquidity="Team"
              remove="/add1.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="62px"
              propBackgroundColor="unset"
            />
            <ToggleHeader
              prop="5%"
              liquidity="Advisory"
              remove="/add1.svg"
              propBorderBottom="1px solid #9945ff"
              propMinWidth="106px"
              propBackgroundColor="unset"
            />
          </div>
        </div>
        <div className="h-[1541.3px] w-[1440px] absolute !m-[0] bottom-[-466.3px] left-[calc(50%_-_720px)]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[-280px] max-h-full w-[2000px] object-cover"
            alt=""
            src="/background-1@2x.png"
          />
          <img
            className="absolute top-[275px] left-[-109px] w-[676.3px] h-[909px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/graph@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Tokenomics.propTypes = {
  className: PropTypes.string,
};

export default Tokenomics;
