import {IResults} from "../Modules/IMovies.ts";


const baseURL = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_TOKEN
// const imgUrl = import.meta.env.VITE_IMG_URL



export const serviceMovies = {
    getMovies: async (): Promise<IResults> => {
        return await fetch(baseURL + '/discover/movie?page=2', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include'
        })
            .then(value => {
                return value.json()
            })
    }

}