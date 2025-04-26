import {useEffect, useState} from "react";
import {imgUrl, serviceMovies} from "../services/api.service.ts";
import {IAllMovies, IResults} from "../Modules/IMovies.ts";
import './MoviesPage.css'




export const MoviesPage = () => {
    const [movies, setMovies] = useState<IAllMovies>();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        serviceMovies.getMoviesData(page)
            .then((reuslt) =>{
                setMovies(reuslt);
                setTotalPages(reuslt.total_pages)
            })
    }, [page]);

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return(
        <div>
            <div className="movies-main">
                {
                    movies?.results.map((movie: IResults) =>
                        <div className="movie-container">
                            <img className="movie-image" src={imgUrl + movie.backdrop_path} alt={movie.title}/>
                            <div className="title">{movie.title}</div>
                        </div>

                    )
                }
            </div>
            <div className="buttons">
                <button
                    onClick={handlePrevious}
                    disabled={page === 1}
                    className="buttons-previous"
                >
                    Previous
                </button>
                <span className="text-lg">Page {page} of {totalPages}</span>
                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="buttons-next"
                >
                    Next
                </button>
            </div>

        </div>
    );
};