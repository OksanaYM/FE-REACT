
import {IMovie} from "../Models/Movie.ts";
import {genreMap} from "../MoviesList/MoviesList.tsx";
import {IAllMovies} from "../Models/IAllMovies.ts";


export const baseURL = import.meta.env.VITE_API_URL
export const token = import.meta.env.VITE_TOKEN
export const imgUrl = import.meta.env.VITE_IMG_URL



export const serviceMovies = {
    getMovies: (page: number, query: string, type: string = 'name'): Promise<IAllMovies> => {
        let endpoint: string = baseURL;
        if (query && type === 'name') {
            endpoint = `${baseURL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`;
        } else if (query && type === 'genre') {
            const genreId = genreMap.get(query.toLowerCase());
            if (genreId) {
                endpoint = `${baseURL}/discover/movie?with_genres=${genreId}&page=${page}`;
            } else {
               return new Promise<IAllMovies>(resolve => {
                    resolve({
                        page: 1,
                        results: [],
                        total_pages: 1,
                        total_results: 0
                    })
               })
            }
        } else {
            endpoint = `${baseURL}/discover/movie?page=${page}`;
        }

        return fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(value =>
                 value.json()
            )
    },
    getMovieDetails: (id: string): Promise<IMovie> => {
        return fetch(baseURL + `/movie/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(value =>
                value.json()
            )
    }

}
