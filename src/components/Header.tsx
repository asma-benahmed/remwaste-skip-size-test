import { PiTruckTrailerLight } from "react-icons/pi";

export const Header = () => {
    return (
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
                <PiTruckTrailerLight className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Premium Skip Hire Services
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Choose the perfect skip size for your project.
            </p>
        </div>
    );
};
