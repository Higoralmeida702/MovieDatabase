import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Movies.css';
import Modal from '../Modal';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [comediaMovies, setComediaMovies] = useState([]);
  const [terrorMovies, setTerrorMovies] = useState([]);
  const [documentarioMovies, setDocumentarioMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = '71f48d983a1d7c2c8e64239136feee27';
  const moviesListRef = useRef(null);
  const romanceMoviesListRef = useRef(null);
  const comediaListRef = useRef(null);
  const terrorListRef = useRef(null);
  const documentarioListRef = useRef(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&region=BR`);
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
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749&language=pt-BR&region=BR`);
        const romanceList = response.data.results.slice(0, 10);
        setRomanceMovies(romanceList);
      } catch (error) {
        console.error('Erro ao obter os filmes de romance:', error);
      }
    };

    fetchRomanceMovies();
  }, []);

  useEffect(() => {
    const fetchComediaMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&language=pt-BR&region=BR`);
        const comediaList = response.data.results.slice(0, 10);
        setComediaMovies(comediaList);
      } catch (error) {
        console.error('Erro ao obter os filmes de comédia:', error);
      }
    };

    fetchComediaMovies();
  }, []);

  useEffect(() => {
    const fetchTerrorMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27&language=pt-BR&region=BR`);
        const terrorList = response.data.results.slice(0, 10);
        setTerrorMovies(terrorList);
      } catch (error) {
        console.error('Erro ao obter os filmes de terror:', error);
      }
    };

    fetchTerrorMovies();
  }, []);

  useEffect(() => {
    const fetchDocumentarioMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99&language=pt-BR&region=BR`);
        const documentarioList = response.data.results.slice(0, 10);
        setDocumentarioMovies(documentarioList);
      } catch (error) {
        console.error('Erro ao obter os filmes de documentario:', error);
      }
    };

    fetchDocumentarioMovies();
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

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='tituloPopularesFilmes'>
      <h1>Os 10 filmes mais populares no Brasil no momento</h1>
      <div className="movies-container">
        <button className="scroll-button left" onClick={() => scrollLeft(moviesListRef)}>←</button>
        <div className="movies-list" ref={moviesListRef}>
          {movies.map(movie => (
            <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie)}>
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
        <h1>Filmes de Romance</h1>
        <div className="movies-container">
          <button className="scroll-button left" onClick={() => scrollLeft(romanceMoviesListRef)}>←</button>
          <div className="movies-list" ref={romanceMoviesListRef}>
            {romanceMovies.map(movie => (
              <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie)}>
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

      <section>
        <h1>Filmes de Comédia</h1>
        <div className="movies-container">
          <button className="scroll-button left" onClick={() => scrollLeft(comediaListRef)}>←</button>
          <div className="movies-list" ref={comediaListRef}>
            {comediaMovies.map(movie => (
              <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="posterFilme"
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={() => scrollRight(comediaListRef)}>→</button>
        </div>
      </section>

      <section>
        <h1>Filmes de Terror</h1>
        <div className="movies-container">
          <button className="scroll-button left" onClick={() => scrollLeft(terrorListRef)}>←</button>
          <div className="movies-list" ref={terrorListRef}>
            {terrorMovies.map(movie => (
              <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="posterFilme"
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={() => scrollRight(terrorListRef)}>→</button>
        </div>
      </section>
      <section>
        <h1>Documentários</h1>
        <div className="movies-container">
          <button className="scroll-button left" onClick={() => scrollLeft(documentarioListRef)}>←</button>
          <div className="movies-list" ref={documentarioListRef}>
            {documentarioMovies.map(movie => (
              <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="posterFilme"
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
          <button className="scroll-button right" onClick={() => scrollRight(documentarioListRef)}>→</button>
        </div>
      </section>

      <Modal isOpen={!!selectedMovie} onClose={closeModal}>
        {selectedMovie && (
          <div>
            <h2>{selectedMovie.title}</h2> 
            <p>{selectedMovie.overview || 'Descrição não disponível.'}</p>
            <p><strong>Avaliação:</strong> {selectedMovie.vote_average}</p>
            <p><strong>Data de lançamento:</strong> {selectedMovie.release_date}</p> {/* Data de lançamento do filme */}
          </div>
        )}
      </Modal>

    </div>
  );
};

export default Movies;
