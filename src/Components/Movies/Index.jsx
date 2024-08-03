import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const apiKey = '71f48d983a1d7c2c8e64239136feee27';
  const moviesListRef = useRef(null);
  const romanceMoviesListRef = useRef(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`);
        const movieList = response.data.results.slice(0, 10);
        setMovies(movieList);
      } catch (error) {
        console.error('Erro ao obter os filmes populares:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const fetchRomanceMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749&language=pt-BR`);
        const romanceList = response.data.results.slice(0, 10);
        setRomanceMovies(romanceList);
      } catch (error) {
        console.error('Erro ao obter os filmes de romance:', error);
      }
    };

    fetchRomanceMovies();
  }, []);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <div className='tituloPopularesFilmes'>
      <h1>Os 10 filmes mais populares no momento</h1>
      <div className="movies-container">
        <button className="scroll-button left" onClick={() => scrollLeft(moviesListRef)}>←</button>
        <div className="movies-list" ref={moviesListRef}>
          {movies.map(movie => (
            <div key={movie.id} className="movie-item">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="posterFilme"
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(moviesListRef)}>→</button>
      </div>

      <section>
        <h1>Os 10 filmes de Romance mais populares no momento</h1>
        <div className="movies-container">
          <button className="scroll-button left" onClick={() => scrollLeft(romanceMoviesListRef)}>←</button>
          <div className="movies-list" ref={romanceMoviesListRef}>
            {romanceMovies.map(movie => (
              <div key={movie.id} className="movie-item">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className="posterFilme"
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={() => scrollRight(romanceMoviesListRef)}>→</button>
        </div>
      </section>
    </div>
  );
};

export default Movies;
