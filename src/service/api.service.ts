import {IModelPost} from "../models/modelPost.ts";

const userPosts = import.meta.env.VITE_API_BASE_URL + '/posts'
const getPosts = async(): Promise<IModelPost[]> => {
    return await fetch(userPosts)
        .then(value => value.json())
}
export {getPosts}