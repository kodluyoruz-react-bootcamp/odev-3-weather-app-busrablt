import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";


function Button() {
    const { setWeatherData, cityName } = useContext(ThemeContext);
    const APP_KEY='5c9649fa840e499e832150503211301'
    async function getdata(value){
        const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=10`)
          const result=await data.json();
          setWeatherData(result.forecast.forecastday)
      console.log(result)
     }
    return (
        <div>
            <button onClick={()=>getdata(cityName)}> Search </button>
        </div>
    )
}

export default Button