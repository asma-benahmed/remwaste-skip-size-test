import { PiTruckTrailerLight } from "react-icons/pi";
import { AnimatedWrapper } from "./AnimatedWrapper";

export const Header = () => {
  return (
    <AnimatedWrapper y={-20} duration={0.6} className="text-center mb-12">
      <AnimatedWrapper
        scale={1}
        delay={0.2}
        className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4"
      >
        <PiTruckTrailerLight className="w-8 h-8 text-white" />
      </AnimatedWrapper>

      <AnimatedWrapper
        delay={0.4}
        className="text-5xl font-bold text-gray-900 mb-6"
      >
        <h1>Choose Your Skip Size</h1>
      </AnimatedWrapper>

      <AnimatedWrapper
        delay={0.6}
        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        <p>
          Professional waste management solutions tailored to your project
          needs. From small garden clearances to major construction projects.
        </p>
      </AnimatedWrapper>
    </AnimatedWrapper>
  );
};
