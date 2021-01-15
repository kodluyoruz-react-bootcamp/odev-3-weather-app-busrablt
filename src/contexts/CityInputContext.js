import { createContext, useState } from "react";

const CityInputContext = createContext({});

export const ThemeProvider=({children})=>{
    const [cityInput, setCityInput] = useState('istanbul')

    const store = {
        city:  { get: cityInput, set: setCityInput }
    }
     return(
        <CityInputContext.Provider value={store}>
             {children}
        </CityInputContext.Provider>
     );
};

export default CityInputContext;