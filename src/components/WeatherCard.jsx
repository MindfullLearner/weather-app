import "./WeatherCard.css";

function WeatherCard({ city, temperature, condition, humidity, wind, icon }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>

      <img src={icon} alt="" />

      <h1>{temperature}°C</h1>
      
      <p>{condition}</p>

      <p>Humidity: {humidity}%</p>

      <p>Wind: {wind} km/h</p>
    </div>
  );
}

export default WeatherCard;