

import React, { useEffect, useState } from 'react';
import axios from '../../axiosInstance';
import { Link } from 'react-router-dom';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import Navbar from '../auth/Navbar';
import './Home.css'; 

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    axios.get('/movie/popular')
      .then(res => setMovies(res.data.results))
      .catch(err => console.error('Error fetching movies:', err));

    axios.get('/genre/movie/list')
      .then(res => setGenres(res.data.genres))
      .catch(err => console.error('Error fetching genres:', err));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genre_ids.includes(Number(selectedGenre)) : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="movies-container">
      <Navbar />
      <div className="movies-controls">
        <InputGroup className="search-bar">
          <FormControl
            type="text"
            placeholder="Search movies by title..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
          <Button variant="outline-secondary" className="search-button">
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>

        <Form.Select 
          value={selectedGenre} 
          onChange={handleGenreChange} 
          className="genre-filter"
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </Form.Select>
      </div>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
              <div className="movie-card-content">
                <img 
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                  alt={movie.title} 
                  className="movie-poster"
                />
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-results">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;