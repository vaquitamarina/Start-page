import { getPosition } from "../assets/Weather.js";
import { useState } from "react";
import { useEffect } from "react";

export function Weather() {
    const [weather, setWeather] = useState(null);
    const [icon, setIcon] = useState(null);
    const [temp , setTemp] = useState(null);
    useEffect(() => {
        getPosition()
        .then((data) => {
            console.log();
            setWeather(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
            setIcon('icons/Nord/' + data.weather[0].icon + '.png');
            setTemp(Math.round(data.main.temp-273.15));
        })
    }, [])

    if (weather === null) {
        return (
            <>
            loading...
            </>
        )
    }
   
    
    return(
        <div className="weather">
            <h2>{weather}</h2>
            <img src={icon} alt={weather} />
            <h3>{temp}°C</h3>
        </div>
    )
}