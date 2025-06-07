import { PiTruckTrailerLight } from "react-icons/pi";

export const Header = () => {
  return (
    <div className="mb-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl">
          <PiTruckTrailerLight className="w-6 h-6 text-white" />
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">
            <h1>Choose Your Skip Size</h1>
          </div>

          <div className="text-md text-gray-600 leading-relaxed">
            <p>Select the skip size that best suits your needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
