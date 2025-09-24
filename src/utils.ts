// src/utils.ts

import axios from 'axios';
import { LocationResponse, Location, WeatherResponse } from "./types";



export function getLocation(locationName: string): Promise<LocationResponse> {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1`;
    return axios.get(url).then((response) => response.data);
}



export async function getCurrentWeather(locationDetails: Location): Promise<WeatherResponse>{
const url=`https://api.open-meteo.com/v1/forecast?latitude=${locationDetails.latitude}&longitude=${locationDetails.longitude}&current_weather=true&models=icon_global`
const response= await axios.get<WeatherResponse>(url)
return response.data
}

export function displayLocation(locationDetails: Location):void{
    const loc= document.getElementById("location-name") as HTMLElement
    const country=document.getElementById("country") as HTMLElement

    loc.innerText= "" + locationDetails.name;
    country.innerText="(" + locationDetails.country + ")";
}

export function displayWeatherData (obj:WeatherResponse) : void {

    const temp = document.getElementById("temperature") as HTMLElement
    const windSpeed=document.getElementById("windspeed") as HTMLElement
    const windDirection=document.getElementById("winddirection")as HTMLElement

    temp.innerText="" + obj.current_weather.temperature + obj.current_weather_units.temperature
    windSpeed.innerText="" + obj.current_weather.windspeed + obj.current_weather_units.windspeed
    windDirection.innerText="" + obj.current_weather.winddirection + obj.current_weather_units.winddirection


}