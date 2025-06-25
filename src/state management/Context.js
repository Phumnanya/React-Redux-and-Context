import React, {createContext, useState} from "react";

export const Weathercontext = createContext();

export const Context = ({children}) => {
    const [weatherData, setweatherData] = useState(null);

    const fetchWeather = async (city) => {
        const API_KEY = "431f5ef15584a951c785eec85f2b0ee0";
        const current = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        try {
            const response = await fetch(current);
            const data0 = await response.json();
            console.log(data0)
            setweatherData(data0);
          } catch (error) {
            console.error("error fetching data:", error);
            alert("city not found", error);
          }
    };
    return (
        <Weathercontext.Provider value={{weatherData, fetchWeather}}>
            {children}
        </Weathercontext.Provider>
    );
};