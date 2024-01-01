import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const getWeather = async (country) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.toLowerCase()}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

const weatherServices = { getWeather };

export default weatherServices;
