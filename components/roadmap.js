import RoadmapCard from "./roadmap-card";
import PropTypes from "prop-types";

const Roadmap = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-xl text-gray-400 font-space-grotesk ${className}`}
    >
      <div className="flex flex-col items-center justify-start py-[120px] px-0 box-border gap-[80px] max-w-full lg:pt-[78px] lg:pb-[78px] lg:box-border mq450:gap-[20px] mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq825:gap-[40px]">
        <div className="w-[341px] flex flex-col items-start justify-start max-w-full">
          <b className="relative leading-[24px] inline-block min-w-[86px] mq450:text-base mq450:leading-[19px]">
            roadmap
          </b>
          <h1 className="m-0 self-stretch relative text-61xl leading-[80px] font-light font-inherit text-green mq450:text-5xl mq450:leading-[32px] mq825:text-21xl mq825:leading-[48px]">
            roadmap
          </h1>
        </div>
        <div className="w-[1360px] h-[440px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[20px] max-w-full text-base text-white">
          <RoadmapCard
            background="/img-0162-1@2x.png"
            phase1="Phase 1"
            emptyPhaseContent="01"
          />
          <RoadmapCard
            background="/img-0162-2@2x.png"
            phase1="Phase 2"
            emptyPhaseContent="02"
            propTop="-30px"
            propLeft="-87px"
            propWidth="unset"
          />
          <RoadmapCard
            background="/img-0162-3@2x.png"
            phase1="Phase 3"
            emptyPhaseContent="03"
            propTop="-30px"
            propLeft="-87px"
            propWidth="unset"
          />
          <RoadmapCard
            background="/img-0162-4@2x.png"
            phase1="Phase 4"
            emptyPhaseContent="04"
            propTop="-30px"
            propLeft="-87px"
            propWidth="unset"
          />
        </div>
      </div>
    </section>
  );
};

Roadmap.propTypes = {
  className: PropTypes.string,
};

export default Roadmap;
