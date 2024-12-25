import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://dummyapi.online/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Function to sort movies based on the selected order
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedMovies = [...movies].sort((a, b) => {
    return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
  });

  return (
    <div>
      <h1>Movie Database</h1>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <label htmlFor="sortOrder">Sort by Rating:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSortOrderChange}
          style={{
            marginLeft: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="asc">Least Rated</option>
          <option value="desc">Most Rated</option>
        </select>
      </div>
      {loading ? <p>Loading...</p> : <MovieList movies={sortedMovies} />}
    </div>
  );
};

export default App;
