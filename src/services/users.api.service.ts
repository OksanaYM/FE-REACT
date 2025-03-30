

export const baseUrl = import.meta.env.VITE_API_URL

export const getUsers = async () =>{
     await fetch(`${baseUrl}/users`)
         .then(value => value.json())
}