import {imgUrl} from "../services/api.service.ts";
import {StarsRating} from "../StarsRating/StarsRating.tsx";

export const MovieListCard= ({movie, imgOnClick}) => {
    return (
        <div className="movie-container">
            <img onClick={() => imgOnClick(movie.id)} className="movie-image"
                 src={imgUrl + movie.backdrop_path} alt={movie.title}/>
            <div className="title">{movie.title}</div>
            <StarsRating rating={movie.vote_average}/>
        </div>
    )
}