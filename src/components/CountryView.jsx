import { ArrowLeftIcon } from "../assets/Icons";
import CountryWeather from "./CountryWeather";

const CountryView = ({ viewCountry, setViewCountry }) => {
  return (
    <div
      className="mt-[60px] max-w-[678px] w-full p-5 sm:p-7 flex flex-col gap-8 bg-[#24353E] 
    shadow-[10px_9px_70px_0px_rgba(36,53,62,0.40)] rounded-3xl"
    >
      {/* Country Weather */}
      <CountryWeather country={viewCountry.name.common} />

      {/* Country Info */}
      <div className="flex flex-col items-start justify-center gap-1 text-white font-poppins">
        <div className="flex items-center justify-center gap-1">
          <img
            className="w-[40px] h-[25px] flex-shrink-0 object-cover"
            src={viewCountry.flags.png}
            alt={viewCountry.flags.alt}
          />
          <span className="font-bold text-2xl">{viewCountry.name.common}</span>
        </div>
        <p className="text-gray-400">Capital : {viewCountry.capital[0]}</p>
        <p className="text-gray-400">Area : {viewCountry.area}</p>
        <div className="w-full flex items-end justify-between gap-2">
          <span className="text-gray-400">
            Languages : {Object.values(viewCountry.languages).join(", ")}
          </span>
          <button
            className="max-w-[170px] p-[4px_8px] sm:p-[8px_12px] rounded-lg sm:rounded-xl bg-[linear-gradient(108deg,#3A5E72_4.95%,_#5C93B1_132.43%)] transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
            onClick={() => setViewCountry(null)}
          >
            <ArrowLeftIcon />
            <span className="text-white font-poppins text-base sm:text-lg font-medium">
              Back
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryView;
