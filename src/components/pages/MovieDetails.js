// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from '../../axiosInstance';
// import Navbar from '../auth/Navbar';

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     axios.get(`/movie/${id}`)
//       .then(res => setMovie(res.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   if (!movie) return <p>Loading...</p>;

//   return (
//     <div>
//       <Navbar />
//       <h1>Movie Details</h1>
//       <h2>{movie.title}</h2>
//       <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//       <p>{movie.overview}</p>
//       <h3>Release Date: {movie.release_date}</h3>
//       <h3>Rating: {movie.vote_average}</h3>
//       <h3>Genres:</h3>
//       <ul>
//         {movie.genres.map(genre => (
//           <li key={genre.id}>{genre.name}</li>
//         ))}
//       </ul>
//       </div>


//   );
// };

// export default MovieDetails;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axiosInstance';
import Navbar from '../auth/Navbar';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/movie/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p className="loading">Loading...</p>;

  return (
    <div className="movie-details-container">
      <Navbar />
      <div className="movie-details-card">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="overview">{movie.overview}</p>
          <h3>Release Date: {movie.release_date}</h3>
          <h3>Rating: {movie.vote_average}/10</h3>
          <h3>Genres:</h3>
          <ul className="genres-list">
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;