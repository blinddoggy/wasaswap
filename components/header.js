import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[60px] rounded-21xl bg-dark-grey box-border flex flex-row items-center justify-between p-2 top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-29xl text-white font-space-grotesk border-[1px] border-solid border-gray-100 ${className}`}
    >
      <div className="w-[200px] flex flex-row items-center justify-start py-0 pr-0 pl-5 box-border">
        <a className="[text-decoration:none] w-48 relative leading-[34px] uppercase font-bold text-[inherit] flex items-center whitespace-nowrap shrink-0">
          wazaaa
        </a>
      </div>
      <div className="w-[593px] flex flex-row items-start justify-start gap-[40px] max-w-full text-base lg:hidden mq825:gap-[20px]">
        <div className="flex flex-row items-center justify-center border-b-[1px] border-solid border-white">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[47px]">
            about
          </a>
        </div>
        <div className="flex flex-row items-center justify-center">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[85px]">
            exchanges
          </a>
        </div>
        <div className="flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[41px]">
            swap
          </a>
        </div>
        <div className="flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[81px]">
            tokenomis
          </a>
        </div>
        <div className="flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[77px]">
            roadmaps
          </a>
        </div>
        <div className="flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[62px]">
            contact
          </a>
        </div>
      </div>
      <div className="self-stretch w-[200px] flex flex-row items-center justify-end">
        <Button
          className="self-stretch w-36"
          endIcon={<img width="24px" height="24px" src="/arrow-outward.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#222",
            fontSize: "16",
            background: "#fff",
            borderRadius: "44px",
            "&:hover": { background: "#fff" },
            width: 144,
          }}
        >
          Buy Now
        </Button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
