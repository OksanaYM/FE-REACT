import {imgUrl} from "../MovieInfo/MovieInfo.tsx";

export const PosterPreview = ({movie}) =>{
    return (
        <>
            {movie?.poster_path ? (
                <img
                    src={`${imgUrl}${movie?.poster_path}`}
                    alt={movie?.title}
                    className="movie-poster"
                />
            ) : (
                <div className="no-poster">No Poster Available</div>
            )}
        </>
    )
}