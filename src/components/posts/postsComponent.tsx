import {useEffect, useState} from "react";
import {IModelPost} from "../../models/modelPost.ts";

export const Posts = () =>{
    const [posts, setPosts] = useState<IModelPost[]> ([]);
    useEffect(() =>{
        async function fetchPosts (){

        }
    })
}