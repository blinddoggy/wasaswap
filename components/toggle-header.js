import { useMemo } from "react";
import PropTypes from "prop-types";

const ToggleHeader = ({
  className = "",
  prop,
  liquidity,
  remove,
  propBorderBottom,
  propMinWidth,
  propBackgroundColor,
}) => {
  const toggleHeaderStyle = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  const liquidity1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const toggleIconStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-start py-2 px-0 box-border gap-[20px] max-w-full text-left text-13xl text-purple font-space-grotesk ${className}`}
      style={toggleHeaderStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[20px] min-w-[319px] max-w-full mq825:flex-wrap">
        <b className="w-[81px] relative leading-[22px] inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
          {prop}
        </b>
        <h1
          className="m-0 flex-1 relative text-inherit leading-[22px] font-bold font-inherit inline-block min-w-[107px] max-w-full mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]"
          style={liquidity1Style}
        >
          {liquidity}
        </h1>
      </div>
      <div className="h-11 w-11 rounded-25xl box-border flex flex-row items-center justify-center py-1 px-[3px] border-[1px] border-solid border-purple">
        <div
          className="h-9 w-9 rounded-17xl bg-purple flex flex-row items-center justify-center p-1.5 box-border"
          style={toggleIconStyle}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={remove}
          />
        </div>
      </div>
    </div>
  );
};

ToggleHeader.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  liquidity: PropTypes.string,
  remove: PropTypes.string,

  /** Style props */
  propBorderBottom: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default ToggleHeader;
