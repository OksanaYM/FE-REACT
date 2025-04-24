import {useEffect, useState} from "react";
import {getMovies} from "../services/api.service.ts";


export const MoviesPage = () =>{
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genreId, setGenreId] = useState();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const moviesData = await getMovies(page, genreId, search);
            setMovies(moviesData.results)
            const genresData = await getGenres()
            setGenres(genresData)
            setMovies(moviesData.results);
            setTotalPages(moviesData.total_pages)
        }
        fetchData()
    }, [page, genreId, search]);
    const fetchSearch = (query) =>{
        setSearch(query);
        setPage(1);
        setGenreId()
    }
    return(
        <div className="container">
            <Header onSearch={handleSearch} />
            <div className="genre-filter">
                <button
                    className={genreId === null ? 'active' : ''}
                    onClick={() => setGenreId(null)}
                >
                    Усі жанри
                </button>
                {genres.map(genre => (
                    <button
                        key={genre.id}
                        className={genreId === genre.id ? 'active' : ''}
                        onClick={() => { setGenreId(genre.id); setPage(1); }}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>
            <MoviesList movies={movies} />
            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                    Попередня
                </button>
                <span>Сторінка {page}</span>
                <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
                    Наступна
                </button>
            </div>
        </div>
    );
};