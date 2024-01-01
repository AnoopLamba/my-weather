import { useEffect, useState } from "react";
import countriesService from "../services/countries";
import CountryView from "./CountryView";

const Hero = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [viewCountry, setViewCountry] = useState(null);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("countries"));
    if (localData) {
      setCountries(localData);
    } else {
      countriesService
        .getAll()
        .then((data) => {
          setCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        })
        .catch((error) => console.log(error.message));
    }
  }, []);

  const filteredResults = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {viewCountry ? (
        <CountryView
          viewCountry={viewCountry}
          setViewCountry={setViewCountry}
        />
      ) : (
        <>
          {/* Center Text */}
          <span className="max-w-[778px] w-full pt-[75px] text-center text-white text-3xl sm:text-[40px] font-medium leading-[100%]">
            See the weather of countries with{" "}
            <span className="bg-[linear-gradient(91deg,#CAECFF_39.76%,#78CFFF_86.12%)] bg-clip-text text-transparent font-bold">
              Weather!
            </span>
          </span>

          {/* Search bar and country list */}
          <div className="mt-[45px] max-w-[400px] w-full flex flex-col gap-2 items-center justify-center text-white font-poppins text-base sm:text-lg">
            <input
              placeholder="Search..."
              name="country"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[40px] sm:h-[50px] px-3 sm:px-4 border-2 border-solid border-transparent rounded-lg sm:rounded-xl outline-none bg-[#24343D] transition-all duration-200 ease-in-out shadow-lg focus:border-2 focus:border-solid focus:border-[#5C93B1] focus:shadow-[0px_0px_0px_5px_rgba(74,157,236,20%)]"
            />
            {filteredResults.length > 3 ? (
              query !== "" && (
                <p className="w-full min-h-[45px] px-4 py-2 text-xs sm:text-lg text-center">
                  Too many matches, be more specific!
                </p>
              )
            ) : (
              <div className="w-full bg-[#3A5E72] flex flex-col justify-start divide-y-[1px] divide-slate-700 shadow-2xl rounded-lg sm:rounded-xl overflow-hidden">
                {filteredResults.map((country) => (
                  <p
                    key={country.name.common}
                    onClick={() => setViewCountry(country)}
                    className="min-h-[35px] sm:min-h-[45px] px-3 sm:px-4 py-2 w-full cursor-pointer hover:bg-[#5C93B1] transition-all duration-300 ease-in-out"
                  >
                    {country.name.common}
                  </p>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
