import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <main className="app">
      <h1>Weather App</h1>
      <p>Search for a city to see the weather.</p>

      <SearchBar/>

      <WeatherCard 
      city="Karachi"
      temperature={34}
      condition="Clear Sky"
      humidity={52}
      wind={12}/>
    </main>
  );
}

export default App;