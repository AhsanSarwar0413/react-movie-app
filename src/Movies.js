import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';
const Movies = () => {
    const { movie, isLoading, isError } = useGlobalContext();
    if (isLoading) {
        return (
            <div>
                <div className="loading">Loading ... </div>
            </div>
        )
    }
    return (
        <>
            <section className="movie-page">
                <div className="container grid grid-4-col">
                    {!isError.show && movie.Search &&
                        movie.Search.map((singleMovie) => {
                            return (
                                <NavLink to={`movie/${singleMovie.imdbID}`} key={singleMovie.imdbID}>
                                    <div className="card">
                                        <div className="card-info">
                                            <h2>{singleMovie.Title.length > 15 ? `${singleMovie.Title.substring(0, 15)}...` : singleMovie.Title}</h2>
                                            <img src={singleMovie.Poster} alt={singleMovie.imdbID} />
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default Movies