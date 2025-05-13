
// import React, { useEffect, useState } from 'react';
// import axios from '../../axiosInstance';
// import { Link } from 'react-router-dom';
// import Navbar from '../auth/Navbar';
// import './Home.css'; 

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get('/movie/popular')
//       .then(res => setMovies(res.data.results))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="movies-container">
//         <Navbar />
//       {movies.map(movie => (
//         <div key={movie.id}>
//           <Link to={`/movie/${movie.id}`}>
//             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//             <h3>{movie.title}</h3>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
import axios from '../../axiosInstance';
import { Link } from 'react-router-dom';
import Navbar from '../auth/Navbar';
import './Home.css'; 

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movie/popular')
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="movies-container">
      <Navbar />
      <div className="movies-grid">
        {movies.map(movie => (
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
        ))}
      </div>
    </div>
  );
};

export default Home;