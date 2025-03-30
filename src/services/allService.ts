import {baseUrl} from "./users.api.service.ts";

export const getAll = async <T,> (endpoint: string): Promise<T> =>{
    return await fetch(`${baseUrl}${endpoint}`)
        .then(value => value.json())
}