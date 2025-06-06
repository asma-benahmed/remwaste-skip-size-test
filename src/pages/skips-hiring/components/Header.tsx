import { PiTruckTrailerLight } from "react-icons/pi";
import { AnimatedWrapper } from "../../../components/AnimatedWrapper";

export const Header = () => {
  return (
    <AnimatedWrapper y={-20} duration={0.6} className="mb-8">
      <div className="flex justify-center items-center gap-6">
        {/* Icon on the left */}
        <AnimatedWrapper
          scale={1}
          delay={0.02}
          className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl"
        >
          <PiTruckTrailerLight className="w-6 h-6 text-white" />
        </AnimatedWrapper>

        {/* Texts stacked on the right */}
        <div className="flex flex-col items-center text-center">
          <AnimatedWrapper
            delay={0.02}
            className="text-3xl font-bold text-gray-900 mb-1"
          >
            <h1>Choose Your Skip Size</h1>
          </AnimatedWrapper>

          <AnimatedWrapper
            delay={0.02}
            className="text-md text-gray-600 leading-relaxed"
          >
            <p>Select the skip size that best suits your needs</p>
          </AnimatedWrapper>
        </div>
      </div>
    </AnimatedWrapper>
  );
};
