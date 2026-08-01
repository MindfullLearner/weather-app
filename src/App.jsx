import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import "./App.css";
function App() 
{
   const [searchCity, setSearchCity] = useState("");
   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
   const weatherCondition = weather?.condition?.toLowerCase() || "";
   let backgroundClass="white";
   
   function handleSearch() 
   {
      const city=searchCity.trim();
      if (city === "")
      {
          setError("Please enter a city name.");
          return;
      }   
      fetchWeather(city);
      
   }
   function handleKeyDown(e)
   {
      if (e.key ==="Enter")
      {
        handleSearch();
      }
   }
   async function fetchWeather(city) 
   {
      setError("");
      setWeather(null);
      setLoading(true);
      try{
        
        const url= `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      
        const response = await fetch(url);
        if (!response.ok) 
        {
          throw new Error("Unable to fetch weather data.");
        }
        const data = await response.json();
        
        setWeather({
          city: data.location.name,
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          wind: data.current.wind_kph,
          condition: data.current.condition.text,
          icon: data.current.condition.icon,
        });
        
      }
      catch(error)
      {
        setError(error.message);
        
      }
      finally {
        setLoading(false);
      }
      
    }
      if (weatherCondition.includes("thunder")) 
      {
          backgroundClass = "thunder-bg"
      }
      else if (weatherCondition.includes("rain") || weatherCondition.includes("drizzle") ) 
      {
          backgroundClass = "rain-bg"
      }
      else if (weatherCondition.includes("sunny") || weatherCondition.includes("clear")) 
      {
          backgroundClass = "sunny-bg"
      }
      else if (weatherCondition.includes("cloud") ||weatherCondition.includes("haze") ||weatherCondition.includes("cloudy")) 
      { 
          backgroundClass = "cloud-bg"
      }
      else
      {
          backgroundClass = "white"
      }
      
  return (
    <main className={"app "+ backgroundClass}>
      <h1>Weather App</h1>
      <p>Search for a city to see the weather.</p>
      
      <SearchBar
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        loading={loading}
      />
      {loading && <p>Loading weather...</p>}
      {error && <p>{error}</p>}   
      {weather && (
        <WeatherCard 
        city={weather.city}
        temperature={weather.temperature}
        humidity={weather.humidity}
        wind={weather.wind}
        condition={weather.condition}
        icon={weather.icon}
        />
      )}
      
    </main>
  );
  
}


export default App;
