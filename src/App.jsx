import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";

function App() {
   const [searchCity, setSearchCity] = useState("");
   const [weatherCity, setWeatherCity] = useState("Karachi");
   function handleSearch() 
   {
    setWeatherCity(searchCity);
   }
  return (
    <main className="app">
      <h1>Weather App</h1>
      <p>Search for a city to see the weather.</p>

      <SearchBar
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSearch={handleSearch}
      />

      <WeatherCard 
      city={weatherCity}
      temperature={34}
      condition="Clear Sky"
      humidity={52}
      wind={12}/>
    </main>
  );
  
}

export default App;