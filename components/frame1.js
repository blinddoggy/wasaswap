import TypeCircle2 from "..public/TypeCircle2";
import TypeCircle3 from "./type-circle3";
import TypeCircle from "./type-circle";
import TypeCircle4 from "./type-circle4";
import TypeCircle6 from "./type-circle6";
import TypeCircle5 from "./type-circle5";
import FrameComponent2 from "./frame-component2";
import PropTypes from "prop-types";

const Frame1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center gap-[150px] text-left text-61xl text-green font-space-grotesk ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
        <div className="self-stretch h-[104px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <div className="w-[589px] flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[80px]">
              <span className="font-light">{`buy `}</span>
              <b>{`wazaa `}</b>
              <span className="font-light">on...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-center text-221xl text-[transparent]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
          <section className="self-stretch relative h-[624px] text-center text-xl text-white font-space-grotesk">
            <div className="absolute top-[414px] left-[164px] hidden flex-row items-start justify-between">
              <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                <img
                  className="absolute bottom-[-330px] left-[-130px] w-[2000px] h-[2000px] object-cover"
                  alt=""
                  src="/textura-11@2x.png"
                />
                <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                  <TypeCircle2
                    typeCircle2TypeCircle="/walletconnect.svg"
                    typeCircleIconWidth="80px"
                    typeCircleIconHeight="80px"
                    typeCircleIconPosition="relative"
                  />
                  <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                    Wallet Conect
                  </div>
                </div>
              </div>
              <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                <img
                  className="absolute top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] w-[2000px] h-[2000px] object-cover"
                  alt=""
                  src="/textura-11@2x.png"
                />
                <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                  <TypeCircle3
                    typeCircle3TypeCircle="/brave.svg"
                    typeCircleIconWidth="80px"
                    typeCircleIconHeight="80px"
                    typeCircleIconPosition="relative"
                  />
                  <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                    Brave
                  </div>
                </div>
              </div>
              <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                <img
                  className="absolute right-[0px] bottom-[0px] w-[2000px] h-[2000px] object-cover"
                  alt=""
                  src="/textura-11@2x.png"
                />
                <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                  <TypeCircle
                    typeCircleTypeCircle="/phantom.svg"
                    typeCircleIconWidth="80px"
                    typeCircleIconHeight="80px"
                    typeCircleIconPosition="relative"
                  />
                  <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                    Phantom
                  </div>
                </div>
              </div>
              <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                <img
                  className="absolute bottom-[-490px] left-[0px] w-[2000px] h-[2000px] object-cover"
                  alt=""
                  src="/textura-11@2x.png"
                />
                <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                  <TypeCircle4
                    typeCircle4TypeCircle="/coinbase.svg"
                    typeCircleIconWidth="80px"
                    typeCircleIconHeight="80px"
                    typeCircleIconPosition="relative"
                  />
                  <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                    Coinbase
                  </div>
                </div>
              </div>
              <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                <img
                  className="absolute top-[0px] right-[0px] w-[2000px] h-[2000px] object-cover"
                  alt=""
                  src="/textura-11@2x.png"
                />
                <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                  <TypeCircle6
                    typeCircle6TypeCircle="/metamask.svg"
                    typeCircleIconWidth="80px"
                    typeCircleIconHeight="80px"
                    typeCircleIconPosition="relative"
                  />
                  <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                    Metamask
                  </div>
                </div>
              </div>
              <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                <img
                  className="absolute top-[calc(50%_-_1600px)] right-[-320px] w-[2000px] h-[2000px] object-cover"
                  alt=""
                  src="/textura-11@2x.png"
                />
                <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                  <TypeCircle5
                    typeCircle5TypeCircle="/coin98.svg"
                    typeCircleIconWidth="80px"
                    typeCircleIconHeight="80px"
                    typeCircleIconPosition="relative"
                  />
                  <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                    Coin98
                  </div>
                </div>
              </div>
              <FrameComponent2 binanceWallet="/binance-wallet.svg" />
            </div>
            <div className="absolute top-[0px] left-[-152px] w-[1434px] overflow-hidden flex flex-col items-end justify-center">
              <div className="w-[1130px] flex flex-row flex-wrap items-start justify-between">
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute right-[0px] bottom-[0px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle
                      typeCircleTypeCircle="/phantom1@2x.png"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Phantom
                    </div>
                  </div>
                </div>
                <FrameComponent2 binanceWallet="/binance-wallet1@2x.png" />
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute bottom-[-330px] left-[-130px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle2
                      typeCircle2TypeCircle="/walletconnect.svg"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Wallet Conect
                    </div>
                  </div>
                </div>
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle3
                      typeCircle3TypeCircle="/brave1@2x.png"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Brave
                    </div>
                  </div>
                </div>
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute bottom-[-330px] left-[-130px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle2
                      typeCircle2TypeCircle="/walletconnect.svg"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Wallet Conect
                    </div>
                  </div>
                </div>
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute bottom-[-490px] left-[0px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle4
                      typeCircle4TypeCircle="/coinbase.svg"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Coinbase
                    </div>
                  </div>
                </div>
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute top-[calc(50%_-_1600px)] right-[-320px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle5
                      typeCircle5TypeCircle="/coin98.svg"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Coin98
                    </div>
                  </div>
                </div>
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute top-[0px] right-[0px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle6
                      typeCircle6TypeCircle="/metamask.svg"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Metamask
                    </div>
                  </div>
                </div>
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute right-[0px] bottom-[0px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle
                      typeCircleTypeCircle="/phantom1@2x.png"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Phantom
                    </div>
                  </div>
                </div>
                <div className="w-[210px] relative rounded-21xl box-border h-[210px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-100">
                  <img
                    className="absolute top-[0px] right-[0px] w-[2000px] h-[2000px] object-cover"
                    alt=""
                    src="/textura-11@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] bg-black1 w-[400px] h-[400px] opacity-[0.2]" />
                  <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_70px)] flex flex-col items-center justify-start gap-[10px]">
                    <TypeCircle6
                      typeCircle6TypeCircle="/metamask.svg"
                      typeCircleIconWidth="80px"
                      typeCircleIconHeight="80px"
                      typeCircleIconPosition="relative"
                    />
                    <div className="w-[140px] relative leading-[40px] font-medium inline-block">
                      Metamask
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-center mt-[-34px]">
            <div className="self-stretch relative bg-black1 h-[900px] overflow-hidden shrink-0">
              <img
                className="absolute top-[calc(50%_-_455px)] left-[calc(50%_-_720px)] w-[1440px] h-[909.5px] object-cover hidden opacity-[0.5]"
                alt=""
                src="/img-0165-1@2x.png"
              />
              <div className="absolute top-[-322px] left-[-257px] w-[1955px] overflow-hidden flex flex-col items-center justify-end py-[272px] px-0 box-border">
                <img
                  className="self-stretch max-w-full overflow-hidden h-[1289.1px] shrink-0 object-cover"
                  alt=""
                  src="/frame1@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[40px] opacity-[0.2] mt-[-1272px]">
                  <div className="flex flex-row items-start justify-between">
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                    <b className="relative tracking-[-0.12em] leading-[168px] [-webkit-text-stroke:1px_#9945ff]">
                      888
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[122px] left-[40px] w-[1246px] overflow-hidden flex flex-row items-center justify-between text-base text-white">
                <div className="w-[555px] rounded-21xl flex flex-col items-start justify-start p-10 box-border gap-[40px] bg-[url('/frame-188@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <div className="self-stretch flex flex-col items-start justify-start relative gap-[20px]">
                    <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-[20px] z-[0]">
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                        <div className="relative leading-[16px] font-medium">
                          from
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-5 text-21xl text-[transparent]">
                        <div className="flex flex-row items-center justify-start">
                          <b className="relative leading-[44px] [-webkit-text-stroke:1px_#fff]">
                            2,194
                          </b>
                        </div>
                        <div className="rounded-25xl bg-dark-grey flex flex-row items-center justify-end p-1 text-base text-green border-[1px] border-solid border-green">
                          <img
                            className="w-9 relative h-9"
                            alt=""
                            src="/protocol-icon.svg"
                          />
                          <div className="rounded-17xl bg-green hidden flex-row items-start justify-start p-1.5">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/keyboard-arrow-down.svg"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-center py-2.5 px-4">
                            <div className="relative leading-[16px]">SOL</div>
                          </div>
                          <img
                            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/keyboard-arrow-down1.svg"
                          />
                          <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/keyboard-arrow-down1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-[20px] z-[1]">
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                        <div className="relative leading-[16px] font-medium">
                          to
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-5 text-21xl text-[transparent]">
                        <div className="flex flex-row items-center justify-start">
                          <b className="relative leading-[44px] [-webkit-text-stroke:1px_#fff]">
                            12,466
                          </b>
                        </div>
                        <div className="rounded-25xl bg-dark-grey flex flex-row items-center justify-end p-1 text-base text-green border-[1px] border-solid border-green">
                          <img
                            className="w-9 relative h-9 hidden"
                            alt=""
                            src="/protocol-icon.svg"
                          />
                          <img
                            className="w-9 relative h-9"
                            alt=""
                            src="/protocol-icon1.svg"
                          />
                          <div className="flex flex-row items-center justify-center py-2.5 px-4">
                            <div className="relative leading-[16px]">WAZAA</div>
                          </div>
                          <img
                            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/keyboard-arrow-down1.svg"
                          />
                          <div className="rounded-17xl bg-dark-grey hidden flex-row items-start justify-start p-1.5">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/keyboard-arrow-down1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="!m-[0] absolute top-[calc(50%_-_22px)] left-[calc(50%_-_21.5px)] rounded-17xl bg-green flex flex-row items-start justify-start p-1.5 z-[2] border-[4px] border-solid border-black">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/autorenew.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start p-5 gap-[20px]">
                    <div className="flex flex-row items-center justify-between text-xl">
                      <div className="flex flex-row items-end justify-start gap-[4px]">
                        <b className="relative leading-[20px]">2,194</b>
                        <div className="relative leading-[20px] font-light">
                          SOL
                        </div>
                      </div>
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/drag-handle.svg"
                      />
                      <div className="flex flex-row items-end justify-start gap-[4px]">
                        <b className="relative leading-[20px]">12,466</b>
                        <div className="relative leading-[20px] font-light">
                          WAZAA
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative leading-[20px]">
                        Minimun Received
                      </div>
                      <div className="flex flex-row items-end justify-start gap-[8px]">
                        <b className="relative leading-[16px]">10</b>
                        <div className="relative leading-[16px]">WAZAA</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative leading-[20px]">
                        Price Impact
                      </div>
                      <div className="flex flex-row items-end justify-start gap-[8px]">
                        <b className="relative leading-[16px]">-</b>
                        <div className="w-2 relative leading-[16px] hidden">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-25xl bg-green flex flex-row items-center justify-between p-1 relative text-dark-grey">
                    <div className="flex flex-row items-center justify-center py-2.5 px-4 z-[0]">
                      <div className="relative leading-[16px]">Swap</div>
                    </div>
                    <div className="!m-[0] absolute top-[4px] right-[4px] rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 z-[1]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/autorenew1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[555px] flex flex-col items-start justify-start gap-[40px] text-61xl text-green">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[80px]">
                      <span className="font-light">{`buy `}</span>
                      <b>wazaa</b>
                    </div>
                  </div>
                  <div className="self-stretch relative text-xl tracking-[0.02em] leading-[32px] font-light font-archivo text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas mollis dui mi, sed varius lacus rutrum at. Etiam
                    eget consectetur elit. Ut nunc sem, tincidunt id turpis sit
                    amet, vulputate sollicitudin quam. Integer quis commodo
                    odio. Maecenas malesuada diam nisi, eu aliquet enim quis. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
};

export default Frame1;
