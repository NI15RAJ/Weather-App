import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
  const weather = useWeather();
  const data = weather?.data;

  if (!data) {
    return (
      <div className="card">
        <h2>Loading weather data...</h2>
      </div>
    );
  }

  return (
    <div className="card">
      <img
        src={data.current?.condition?.icon}
        alt={data.current?.condition?.text || "weather icon"}
      />
      <h1>{data.current?.temp_c}°C</h1>
      <h5>
        {data.location?.name}, {data.location?.region},{" "}
        {data.location?.country}
      </h5>
      <p>{data.current?.condition?.text}</p>
    </div>
  );
};

export default Card;
