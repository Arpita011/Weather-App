import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";



export default function(){
   const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 24.57,
        temp:25.08,
        tempMin:25.05,
        tempMax:27,
        humidity:45,
        weather:"haze",
   });

   let updateInfo=(result)=>{
    setWeatherInfo(result);
   }


    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            </div>
    );
}