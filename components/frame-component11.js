import Header from "./header";
import Hero from "./hero";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[120px] box-border max-w-full text-left text-xl text-gray-400 font-space-grotesk lg:pb-[78px] lg:box-border mq825:pb-[51px] mq825:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        <Header />
        <Hero />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
