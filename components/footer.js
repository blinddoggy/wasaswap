import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch rounded-t-21xl rounded-b-none overflow-hidden flex flex-col items-center justify-start relative max-w-full text-left text-xl text-gray-400 font-space-grotesk ${className}`}
    >
      <div className="w-[1940px] h-[197px] absolute !m-[0] top-[calc(50%_+_262px)] left-[calc(50%_-_969.5px)] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[262px] [transform:scale(3.655)]"
          alt=""
          src="/img-0163-11@2x.png"
        />
      </div>
      <div className="self-stretch rounded-t-21xl rounded-b-none bg-gray-200 box-border overflow-hidden flex flex-row items-center justify-between pt-[118px] px-10 pb-60 max-w-full gap-[20px] z-[1] border-t-[1px] border-solid border-gray-100 lg:flex-wrap mq450:pt-[77px] mq450:pb-[156px] mq450:box-border">
        <div className="flex flex-col items-start justify-start min-w-[249px] lg:flex-1">
          <b className="relative leading-[24px] inline-block min-w-[88px] mq450:text-base mq450:leading-[19px]">
            contacts
          </b>
          <h1 className="m-0 relative text-61xl leading-[80px] font-light font-inherit text-green mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
            join us
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start gap-[40px] max-w-full text-base text-green mq825:flex-wrap mq825:gap-[20px]">
          <Button
            className="h-11 w-[218px]"
            endIcon={
              <img width="24px" height="24px" src="/arrow-outward-2.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#14f195",
              fontSize: "16",
              background: "#222",
              border: "#14f195 solid 1px",
              borderRadius: "44px",
              "&:hover": { background: "#222" },
              width: 218,
              height: 44,
            }}
          >
            team@wasaa.com
          </Button>
          <Button
            className="h-11 w-[146px]"
            endIcon={
              <img width="24px" height="24px" src="/arrow-outward-3.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#14f195",
              fontSize: "16",
              background: "#222",
              border: "#14f195 solid 1px",
              borderRadius: "44px",
              "&:hover": { background: "#222" },
              width: 146,
              height: 44,
            }}
          >
            Telegram
          </Button>
          <Button
            className="h-11 w-[152px]"
            endIcon={
              <img width="24px" height="24px" src="/arrow-outward-4.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#14f195",
              fontSize: "16",
              background: "#222",
              border: "#14f195 solid 1px",
              borderRadius: "44px",
              "&:hover": { background: "#222" },
              width: 152,
              height: 44,
            }}
          >
            Facebook
          </Button>
          <div className="w-[87px] rounded-25xl bg-dark-grey box-border flex flex-row items-center justify-center py-0.5 px-[3px] border-[1px] border-solid border-green">
            <div className="flex flex-row items-center justify-center py-2.5 px-4">
              <div className="relative leading-[16px] inline-block min-w-[11px]">
                X
              </div>
            </div>
            <div className="h-9 w-9 rounded-17xl bg-green flex flex-row items-start justify-start p-1.5 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/arrow-outward2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full !m-[0] absolute bottom-[60px] left-[calc(50%_-_720.5px)] overflow-hidden flex flex-row items-start justify-start gap-[20px] max-w-full z-[2] text-221xl text-[transparent] mq1425:flex-wrap">
        <h1 className="m-0 w-[729px] relative text-inherit leading-[168px] font-bold font-inherit inline-block [-webkit-text-stroke:1px_#9945ff] max-w-full shrink-0 mq450:text-41xl mq450:leading-[67px] mq825:text-77xl mq825:leading-[101px]">
          wasaa
        </h1>
        <h1 className="m-0 w-[729px] relative text-inherit leading-[168px] font-bold font-inherit inline-block [-webkit-text-stroke:1px_#9945ff] max-w-full shrink-0 mq450:text-41xl mq450:leading-[67px] mq825:text-77xl mq825:leading-[101px]">
          wasaa
        </h1>
        <h1 className="m-0 w-[729px] relative text-inherit leading-[168px] font-bold font-inherit inline-block [-webkit-text-stroke:1px_#9945ff] max-w-full shrink-0 mq450:text-41xl mq450:leading-[67px] mq825:text-77xl mq825:leading-[101px]">
          wasaa
        </h1>
      </div>
      <footer className="self-stretch bg-black1 flex flex-col items-center justify-center pt-[18px] px-5 pb-5 z-[1] text-left text-base text-light-gray font-space-grotesk border-t-[1px] border-solid border-black">
        <div className="relative leading-[20px] font-light">
          © 2024 Wasaa. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
