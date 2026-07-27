import "./WeatherCard.css";

function WeatherCard({ city, temperature, condition, humidity, wind }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>

      <p>{condition}</p>

      <h1>{temperature}°C</h1>

      <p>Humidity: {humidity}%</p>

      <p>Wind: {wind} km/h</p>
    </div>
  );
}

export default WeatherCard;