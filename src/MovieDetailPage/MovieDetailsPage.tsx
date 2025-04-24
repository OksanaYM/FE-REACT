import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <div>Завантаження...</div>;

    return (
        <div className="container">
            <Header onSearch={() => {}} />
            <div className="movie-details">
                <PosterPreview posterPath={movie.poster_path} />
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview || 'Без опису'}</p>
                    <StarsRating rating={movie.vote_average} />
                    <div>{movie.genres && movie.genres.map(genre => <GenreBadge key={genre.id} genre={genre} />)}</div>
                    <UserInfo />
                </div>
            </div>
        </div>
    );
};