import Hero from "./Hero";
import Navbar from "./Navbar";
import bgimage from "../assets/bg-group-vectors.png";

const Weather = () => {
  return (
    <div className="bg-[#1B262C]">
      <div
        className="bg-center bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-start px-4 pb-4"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
      </div>
    </div>
  );
};

export default Weather;
