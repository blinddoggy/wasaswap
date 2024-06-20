import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full text-left text-xl text-gray-400 font-space-grotesk mq825:pb-[97px] mq825:box-border ${className}`}
    >
      <div className="w-[900px] flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[589px] flex flex-col items-start justify-start max-w-full">
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
        <div className="self-stretch h-[440px] flex flex-row flex-wrap items-start justify-start relative gap-[20px_18.7px] text-center text-white">
          <div className="w-[210px] !m-[0] absolute top-[0px] left-[0px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38px] px-[34px] gap-[10px] border-[1px] border-solid border-gray-100">
            <div className="w-[2000px] h-[2000px] absolute !m-[0] top-[-1220px] right-[-1540px] z-[1]">
              <img
                className="absolute bottom-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/textura-11@2x.png"
              />
              <div className="absolute top-[calc(50%_+_125px)] left-[calc(50%_-_845px)] bg-black1 w-[400px] h-[400px] opacity-[0.2] z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/binance-wallet.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Binance
            </div>
          </div>
          <div className="w-[210px] !m-[0] absolute top-[0px] left-[230px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38px] px-[34px] gap-[10px] border-[1px] border-solid border-gray-100">
            <div className="w-[2095px] h-[2000px] absolute !m-[0] top-[-1300px] right-[-1790px] z-[1]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[95px] max-h-full w-[2000px] object-cover"
                alt=""
                src="/textura-11@2x.png"
              />
              <div className="absolute top-[calc(50%_+_205px)] left-[calc(50%_-_1047.5px)] bg-black1 w-[400px] h-[400px] opacity-[0.2] z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/coinbase.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Coinbase
            </div>
          </div>
          <div className="w-[210px] !m-[0] absolute top-[0px] left-[460px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38px] px-[34px] gap-[10px] border-[1px] border-solid border-gray-100">
            <div className="w-[2095px] h-[2095px] absolute !m-[0] bottom-[-1790px] left-[-1790px] z-[1]">
              <img
                className="absolute top-[95px] right-[95px] w-[2000px] h-[2000px] object-cover"
                alt=""
                src="/textura-11@2x.png"
              />
              <div className="absolute top-[calc(50%_-_1047.5px)] left-[calc(50%_+_647.5px)] bg-black1 w-[400px] h-[400px] opacity-[0.2] z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative rounded-3xl overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/metamask.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Metamask
            </div>
          </div>
          <div className="w-[210px] !m-[0] absolute top-[0px] left-[690px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38px] px-[34px] gap-[10px] border-[1px] border-solid border-gray-100">
            <div className="w-[2000px] h-[2000px] absolute !m-[0] top-[-1495px] left-[-1470px] z-[1]">
              <img
                className="absolute top-[calc(50%_-_1000px)] right-[0px] w-full h-full object-cover"
                alt=""
                src="/textura-11@2x.png"
              />
              <div className="absolute top-[calc(50%_+_400px)] left-[calc(50%_+_375px)] bg-black1 w-[400px] h-[400px] opacity-[0.2] z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/coin98.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Coin98
            </div>
          </div>
          <div className="w-[210px] !m-[0] absolute top-[230px] left-[0px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38px] px-[34px] gap-[10px] border-[1px] border-solid border-gray-100">
            <div className="w-[2000px] h-[2000px] absolute !m-[0] top-[-1460px] right-[-1660px] z-[1]">
              <img
                className="absolute bottom-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/textura-11@2x.png"
              />
              <div className="absolute top-[calc(50%_+_365px)] left-[calc(50%_-_965px)] bg-black1 w-[400px] h-[400px] opacity-[0.2] z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/walletconnect.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Wallet Conect
            </div>
          </div>
          <div className="w-[210px] !m-[0] absolute top-[230px] left-[230px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38px] px-[34px] gap-[10px] border-[1px] border-solid border-gray-100">
            <div className="w-[2000px] h-[2000px] absolute !m-[0] top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] z-[1]">
              <img
                className="absolute top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] w-full h-full object-cover"
                alt=""
                src="/textura-11@2x.png"
              />
              <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2] z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative rounded-3xl overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/brave.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Brave
            </div>
          </div>
          <div className="w-[210px] !m-[0] absolute top-[230px] left-[460px] rounded-21xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[38px] px-[34px] gap-[10px] border-[1px] border-solid border-gray-100">
            <div className="w-[2095px] h-[2095px] absolute !m-[0] top-[-1790px] left-[-1790px] z-[1]">
              <img
                className="absolute right-[95px] bottom-[95px] w-[2000px] h-[2000px] object-cover"
                alt=""
                src="/textura-11@2x.png"
              />
              <div className="absolute top-[calc(50%_+_647.5px)] left-[calc(50%_+_647.5px)] bg-black1 w-[400px] h-[400px] opacity-[0.2] z-[1]" />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[30px]">
              <img
                className="h-20 w-20 relative overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/phantom2.svg"
              />
            </div>
            <div className="self-stretch relative leading-[40px] font-medium z-[2] mq450:text-base mq450:leading-[32px]">
              Phantom
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
