import React from "react";
import { useWeather } from "../context/weather";

const Input=()=>{
    const weather=useWeather();
    console.log("weather",weather);
    
    return(
        <input
        className="input-field"
        placeholder="Search"
         value={weather.searchCity ??""}
         onChange={(e)=>weather.setSearchCity(e.target.value)}
         />
    );
};

export default Input;
