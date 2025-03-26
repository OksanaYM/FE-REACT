import {IModelPost} from "../models/modelPost.ts";

const userPosts = import.meta.env.VITE_API_BASE_URL = '/posts'
const loadPosts = async(): Promise<IModelPost[]> => {
    return await fetch(userPosts)
        .then(value => value.json())
}
export {loadPosts}