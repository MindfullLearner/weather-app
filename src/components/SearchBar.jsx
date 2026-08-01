import "./SearchBar.css";


function SearchBar({ searchCity, setSearchCity, handleSearch, handleKeyDown, loading }) {
  
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button 
        onClick={handleSearch}
        disabled={loading}>
          {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;
