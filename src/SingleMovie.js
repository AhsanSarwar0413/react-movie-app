import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from './Context'
const SingleMovie = () => {


    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");

    useEffect(() => {
        const getMovies = async (API_URL) => {
            setIsLoading(true);
            try {
                const data = await fetch(API_URL)
                    .then(response => response.json());
                if (data.Response === "True") {
                    setMovie(data);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }

        let queryTimer = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        }, [800])

        return () => clearTimeout(queryTimer);
    }, [id]);


    if (isLoading) {
        return (
            <div className="movie-section">
                <div className="loading">Loading ... </div>
            </div>
        )
    }

    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img src={movie.Poster} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>
                    <p className=""></p>
                    <p className="card-text">Released Date: {movie.Released}</p>
                    <p className="card-text">Genre: {movie.Genre}</p>
                    <p className="card-text">IMDB Rating: {movie.imdbRating} / 10</p>
                    <p className="card-text">Country: {movie.Country}</p>
                    <Link className="back-btn" to="/">Go Back</Link>
                </div>

            </div>
        </section>
    )
}

export default SingleMovie