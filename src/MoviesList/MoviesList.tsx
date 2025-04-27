import {useEffect, useState} from "react";
import {serviceMovies} from "../services/api.service.ts";
import {useNavigate, useParams} from "react-router-dom";
import {IMovie} from "../Models/Movie.ts";
import {IAllMovies} from "../Models/IAllMovies.ts";
import './MoviesList.css'
import {MovieListCard} from "../MovieListCard/MovieListCard.tsx";

export const genreMap: Map<string, number> = new Map<string, number>([
    ["action", 28],
    ["adventure", 12],
    ["animation", 16],
    ["comedy", 35],
    ["crime", 80],
    ["documentary", 99],
    ["drama", 18],
    ["family", 10751],
    ["fantasy", 14],
    ["history", 36],
    ["horror", 27],
    ["music", 10402],
    ["mystery", 9648],
    ["romance", 10749],
    ["scifi", 878],
    ["thriller", 53],
    ["war", 10752],
    ["western", 37]
]);


function SearchInput({ onSearch, onReset }) {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('name');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query, searchType);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchType === 'name' ? 'Search by movie name...' : 'Search by genre...'}
            />
            <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
            >
                <option value="name">Name</option>
                <option value="genre">Genre</option>
            </select>
            <button type="submit">Search</button>
            <button onClick={() => {
                setQuery('')
                return onReset();
            }}>Clear Search Results</button>
        </form>
    );
}

export const MoviesList = () => {
    const [movies, setMovies] = useState<IAllMovies>();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('name');
    const [isSearching, setIsSearching] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        if (id && !searchQuery) {
            setSearchType('genre');
            setSearchQuery(id);
        }
        serviceMovies.getMoviesData(page, searchQuery, searchType)
            .then((result) =>{
                setMovies(result);
                setTotalPages(result.total_pages);
                setSearchQuery(searchQuery);
            })
    }, [page, searchQuery, searchType]);

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const navigate = useNavigate()
    const imgOnClick = (id: number) =>{
        navigate('/movie/' + id)
    }

    const handleSearch = (query: string, type: string) => {
        navigate('/')
        setSearchQuery(query);
        setSearchType(type);
        setPage(1);
        setIsSearching(true);
    };

    const handleReset = () => {
        setSearchQuery('');
        setSearchType('name');
        setPage(1);
        setIsSearching(false);
    };
    return(
        <div><h1 className="main-title">
            {isSearching ? `Search Results for "${searchQuery}"` : ''}
        </h1>
            <SearchInput onSearch={handleSearch} onReset={handleReset}/>
            <div className="movies-main">
                {
                    movies?.results.map((movie: IMovie) =>
                        <MovieListCard movie={movie} imgOnClick={imgOnClick}/>
                    )
                }

                <div className="buttons">
                    <button
                        onClick={handlePrevious}
                        disabled={page === 1}
                        className="buttons-previous">
                        PREVIOUS
                    </button>
                    <span className="text-lg">Page {page} of {totalPages}</span>
                    <button
                        onClick={handleNext}
                        disabled={page === totalPages}
                        className="buttons-next">
                        NEXT
                    </button>
                </div>


            </div>


        </div>

    );
};