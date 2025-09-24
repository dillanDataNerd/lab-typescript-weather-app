// src/main.ts

import {
  displayLocation,
  displayWeatherData,
  getCurrentWeather,
  getLocation,
} from "./utils";

async function handleSubmit(event: Event) {
  event.preventDefault();

  const locationInput = document.getElementById("location") as HTMLInputElement;
  const locationName = locationInput.value;

  try {
    const locationRes = await getLocation(locationName);
    const locationInfo= locationRes.results[0] 
     const weatherInfo = await getCurrentWeather(locationInfo);
console.log(weatherInfo)
     displayLocation(locationInfo);
     displayWeatherData(weatherInfo);
  } catch (error) {
    console.log(error);
  }
}
const button = document.getElementById("weather-form");
button?.addEventListener("submit", handleSubmit);
