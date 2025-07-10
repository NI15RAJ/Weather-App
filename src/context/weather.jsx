import { createContext,
   useContext, 
   useState } from "react";


import {
  getWeatherDataForCity,
  getWeatherDataForLocation,
} from "../api/api";

const WeatherContext = createContext(null);

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [searchCity, setSearchCity] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    if (!searchCity) return;
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((res) => setData(res));
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        setSearchCity,
        data,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
