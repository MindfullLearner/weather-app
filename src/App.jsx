import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <main>
      <h1>Weather App</h1>
      <p>Search for a city to see the weather.</p>

      <SearchBar/>
      
      <WeatherCard/>
    </main>
  );
}

export default App;