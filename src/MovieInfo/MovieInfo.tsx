import {useEffect, useState} from "react";
import {serviceMovies} from "../services/api.service.ts";
import { useParams } from 'react-router-dom';
import {IMovie} from "../Models/Movie.ts";

import './MovieInfo.css';
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";
import {useNavigate} from "react-router-dom";

export const imgUrl = import.meta.env.VITE_IMG_URL

export const MovieInfo = () =>{
    const {id} = useParams();
    const [movie, setMovie] = useState<IMovie>();
    const navigate = useNavigate();
    useEffect(() => {
        serviceMovies.getMovieDetails(id!)
            .then((result) =>{
                setMovie(result);
            })
    }, [id]);

    const selectBadgeHandler = (genre: string) =>  navigate(`/genres/${genre}`)

    return(
        <>
            <div className="container">
                <div className="movie-card">
                    {movie?.poster_path ? (
                        <img
                            src={`${imgUrl}${movie?.poster_path}`}
                            alt={movie?.title}
                            className="movie-poster"
                        />
                    ) : (
                        <div className="no-poster">No Poster Available</div>
                    )}
                    <div className="movie-details">
                        <h2 className="movie-title">{movie?.title}</h2>
                        <p className="movie-tagline">{movie?.tagline}</p>
                        <p className="movie-overview"><strong>Overview:</strong> {movie?.overview}</p>
                        <p className="movie-release"><strong>Release Date:</strong> {movie?.release_date}</p>
                        <p className="movie-rating"><strong>Rating:</strong> {movie?.vote_average}/10
                            ({movie?.vote_count} votes)</p>
                        <p className="movie-genres">
                            <strong>Genres:</strong> {
                                movie?.genres.map((genre, index: number) =>
                                    <span>
                                        <GenreBadge genre={genre} onSelect={selectBadgeHandler} />
                                        {index != movie?.genres.length - 1 ? <span>, </span> : ''}
                                    </span>
                                )
                            }
                        </p>
                        {movie?.runtime && (
                            <p className="movie-runtime"><strong>Runtime:</strong> {movie?.runtime} minutes</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}