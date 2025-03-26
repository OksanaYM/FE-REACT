import {useEffect, useState} from "react";
import {IModelPost} from "../../models/modelPost.ts";
import {getPosts} from "../../service/api.service.ts";
import {Post} from "../post/postComponent.tsx";

export const Posts = () =>{
    const [posts, setPosts] = useState<IModelPost[]> ([]);
    useEffect( () =>{
        getPosts()
            .then(response =>{
                setPosts(response)
            })
    }, []);


    // useEffect(() => {
    //     async function fetchPosts (){
    //         const allPosts = await getPosts();
    //         setPosts(allPosts)
    // }, []);

    return (
        <div>
        {
            posts.map(post =>  <Post post={post} key={post.id}/>)
        }
    </div>
  );
};