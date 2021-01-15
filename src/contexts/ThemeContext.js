import { createContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider=({children})=>{
    const [weatherData, setWeatherData] = useState ([])
    const [cityName, setCityName] = useState ([])

    const values = {
        weatherData,
        setWeatherData,
        cityName,
        setCityName
    };

     return(
         <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
     );
};

export default ThemeContext;