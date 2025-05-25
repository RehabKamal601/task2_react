import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../Redux/favoritesActions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Navbar from '../auth/Navbar';
import './Favorites.css';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  return (
    <div className="favorites-container">
      <Navbar />
      <h1 className="favorites-title">Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map(movie => (
            <div key={movie.id} className="favorite-card">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="favorite-poster"
                />
                <h3 className="favorite-title">{movie.title}</h3>
              </Link>
              <Button
                variant="danger"
                className="remove-button"
                onClick={() => dispatch(removeFavorite(movie.id))}
                aria-label={`Remove ${movie.title} from favorites`}
              >
                <FaTrash /> Remove
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites; // Ensure this line is present