import "./SearchBar.css";


function SearchBar({ searchCity, setSearchCity, handleSearch }) {
  
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;