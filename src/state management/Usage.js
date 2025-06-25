import React, { useContext} from "react";
import { Weathercontext } from "./Context";

function Usage() {
    const { weatherData } = useContext(Weathercontext);

    return(
        <div>
            <div>
                <h1>{weatherData.name}</h1>
            </div>
                <div className="wgt_info_contents">
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="icon" />
                </div>
                <div>
                <h1>{Math.round(weatherData.main.temp)}°C</h1>
                </div>
    
                <div>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="icon2" />
                <p>{weatherData.weather[0].description}</p><br></br>
                </div>

                <div>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="1con3" />
                <p>{weatherData.weather[0].main}</p>
                </div>
        </div>
    );
};

export default Usage;