

const baseURL = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_TOKEN
// const imgUrl = import.meta.env.VITE_IMG_URL






export const getMovies = () => {
    debugger
    return fetch(baseURL + '/discover/movie?page=2', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
        .then(value => {
            debugger
            return value.json()
        })
}



