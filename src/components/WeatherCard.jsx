import "./WeatherCard.css";

function WeatherCard({ city, temperature, condition, humidity, wind, icon }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>

      <img src={icon} alt={condition} />

      <h1 className="temperature">{temperature}°C</h1>
      
      <p className="condition">{condition}</p>

      <hr />
      <div className="weather-details">
        <div className="weather-row">
            <span>💧 Humidity</span>
            <span>{humidity}%</span>
        </div>

        <div className="weather-row">
            <span>🌬 Wind</span>
            <span>{wind} km/h</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
