"use client";
import React, { useState } from 'react';
import axios from 'axios'; // Importing Axios for making HTTP requests

function App() {
  const [movieTitle, setMovieTitle] = useState(''); // State to store movie title
  const [recommendations, setRecommendations] = useState([]); // State to store recommendations

  const handleInputChange = (event) => {
    setMovieTitle(event.target.value); // Update movieTitle state when input changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('/recommend', { movieTitle }); // Send movie title to server
      setRecommendations(response.data.recommendations); // Update recommendations state with server response
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div>
      <h1>Movie Recommendation System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie title"
          value={movieTitle}
          onChange={handleInputChange}
        />
        <button type="submit">Get Recommendations</button>
      </form>
      <div>
        <h2>Recommendations:</h2>
        <ul>
          {recommendations.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;