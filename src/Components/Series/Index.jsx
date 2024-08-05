import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../Movies/Movies.css';

const Series = () => {
    const [series, setSeries] = useState([]);
    const [animacaoSeries, setAnimacaoSeries] = useState([]);
    const [comediaSeries, setComediaSeries] = useState([]);
    const [familiaSeries, setFamiliaSeries] = useState([]);
    const [documentarioSeries, setDocumentarioSeries] = useState([]);
    const [acaoSeries, setAcaoSeries] = useState([]);
    const apiKey = '71f48d983a1d7c2c8e64239136feee27';
    const seriesListRef = useRef(null);
    const animacaoListRef = useRef(null);
    const comediaListRef = useRef(null);
    const familiaListRef = useRef(null);
    const documentarioListRef = useRef(null);
    const acaoListRef = useRef(null);

    useEffect(() => {
        const fetchPopularSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR&region=BR`);
                const seriesList = response.data.results.slice(0, 10);
                setSeries(seriesList);
            } catch (error) {
                console.error('Erro ao obter as séries populares:', error);
            }
        };

        fetchPopularSeries();
    }, []);

    useEffect(() => {
        const fetchAnimacaoSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=16&language=pt-BR&region=BR`);
                const seriesAnimacaoList = response.data.results.slice(0, 10);
                setAnimacaoSeries(seriesAnimacaoList);
            } catch (error) {
                console.error('Erro ao obter as séries de animação:', error);
            }
        };

        fetchAnimacaoSeries();
    }, []);

    useEffect(() => {
        const fetchComediaSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=35&language=pt-BR&region=BR`);
                const seriesComediaList = response.data.results.slice(0, 10);
                setComediaSeries(seriesComediaList);
            } catch (error) {
                console.error('Erro ao obter as séries de comédia:', error);
            }
        };

        fetchComediaSeries();
    }, []);

    useEffect(() => {
        const fetchFamiliaSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=10751&language=pt-BR&region=BR`);
                const seriesFamiliaList = response.data.results.slice(0, 10);
                setFamiliaSeries(seriesFamiliaList);
            } catch (error) {
                console.error('Erro ao obter as séries de família:', error);
            }
        };

        fetchFamiliaSeries();
    }, []);

    useEffect(() => {
        const fetchDocumentarioSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=99&language=pt-BR&region=BR`);
                const seriesDocumentarioList = response.data.results.slice(0, 10);
                setDocumentarioSeries(seriesDocumentarioList);
            } catch (error) {
                console.error('Erro ao obter as séries de documentário:', error);
            }
        };

        fetchDocumentarioSeries();
    }, []);

    useEffect(() => {
        const fetchAcaoSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=10759&language=pt-BR&region=BR`);
                const seriesAcaoList = response.data.results.slice(0, 10);
                setAcaoSeries(seriesAcaoList);
            } catch (error) {
                console.error('Erro ao obter as séries de ação:', error);
            }
        };

        fetchAcaoSeries();
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
            <h1>As 10 séries mais populares no Brasil no momento</h1>
            <div className="movies-container">
                <button className="scroll-button left" onClick={() => scrollLeft(seriesListRef)}>←</button>
                <div className="movies-list" ref={seriesListRef}>
                    {series.map(serie => (
                        <div key={serie.id} className="series-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                alt={serie.name}
                                className="posterFilme"
                            />
                            <h3>{serie.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollRight(seriesListRef)}>→</button>
            </div>

            <h1>Animações</h1>
            <div className="movies-container">
                <button className="scroll-button left" onClick={() => scrollLeft(animacaoListRef)}>←</button>
                <div className="movies-list" ref={animacaoListRef}>
                    {animacaoSeries.map(serie => (
                        <div key={serie.id} className="series-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                alt={serie.name}
                                className="posterFilme"
                            />
                            <h3>{serie.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollRight(animacaoListRef)}>→</button>
            </div>

            <h1>Comédia</h1>
            <div className="movies-container">
                <button className="scroll-button left" onClick={() => scrollLeft(comediaListRef)}>←</button>
                <div className="movies-list" ref={comediaListRef}>
                    {comediaSeries.map(serie => (
                        <div key={serie.id} className="series-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                alt={serie.name}
                                className="posterFilme"
                            />
                            <h3>{serie.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollRight(comediaListRef)}>→</button>
            </div>

            <h1>Família</h1>
            <div className="movies-container">
                <button className="scroll-button left" onClick={() => scrollLeft(familiaListRef)}>←</button>
                <div className="movies-list" ref={familiaListRef}>
                    {familiaSeries.map(serie => (
                        <div key={serie.id} className="series-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                alt={serie.name}
                                className="posterFilme"
                            />
                            <h3>{serie.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollRight(familiaListRef)}>→</button>
            </div>

            <h1>Documentário</h1>
            <div className="movies-container">
                <button className="scroll-button left" onClick={() => scrollLeft(documentarioListRef)}>←</button>
                <div className="movies-list" ref={documentarioListRef}>
                    {documentarioSeries.map(serie => (
                        <div key={serie.id} className="series-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                alt={serie.name}
                                className="posterFilme"
                            />
                            <h3>{serie.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollRight(documentarioListRef)}>→</button>
            </div>

            <h1>Ação</h1>
            <div className="movies-container">
                <button className="scroll-button left" onClick={() => scrollLeft(acaoListRef)}>←</button>
                <div className="movies-list" ref={acaoListRef}>
                    {acaoSeries.map(serie => (
                        <div key={serie.id} className="series-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                alt={serie.name}
                                className="posterFilme"
                            />
                            <h3>{serie.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollRight(acaoListRef)}>→</button>
            </div>
        </div>
    );
};

export default Series;
