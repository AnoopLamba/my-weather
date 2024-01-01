import { useEffect, useState } from "react";
import weatherServices from "../services/temperature";

const CountryWeather = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(null);

  useEffect(() => {
    if (country) {
      weatherServices
        .getWeather(country)
        .then((data) => {
          setCountryWeather(data);
        })
        .catch((error) => console.log(error.message));
    }
  }, []);

  return (
    <>
      {countryWeather && (
        <div className="flex items-start justify-between relative">
          {/* weather data */}
          <div className="flex max-[540px]:mt-24 flex-col items-start justify-center">
            <p className="text-[50px] sm:text-[80px] font-poppins text-white">
              {countryWeather.main.temp}&deg; C
            </p>
            <span className="text-base text-gray-400 mt-[-10px] sm:mt-[-17px]">
              {countryWeather.weather[0].description.replace(/\b\w/g, (char) =>
                char.toUpperCase()
              )}
            </span>
            <span className="text-base text-gray-400">
              Wind Speed : {countryWeather.wind.speed} m/s
            </span>
          </div>

          {/* weather icon */}
          <div className="max-sm:w-[170px] max-sm:h-[170px] right-0 top-[-45px] flex flex-col items-center justify-center absolute">
            <img
              className="object-cover"
              src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@4x.png`}
              alt="weather icon"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CountryWeather;
