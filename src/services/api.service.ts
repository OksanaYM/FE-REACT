import {IAllMovies} from "../Modules/IMovies.ts";


const baseURL = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_TOKEN
// const imgUrl = import.meta.env.VITE_IMG_URL



export const serviceMovies = {
    getMoviesData: (page: number): Promise<IAllMovies> => {
        return fetch(baseURL + `/discover/movie?page=${page}`, {
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