import {baseUrl} from "./users.api.service.ts";

export const getPosts = async() =>{
    await fetch(`${baseUrl}/posts`)
        .then(value => value.json())
}