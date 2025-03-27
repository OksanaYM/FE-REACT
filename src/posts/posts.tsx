import {useEffect, useState} from "react";
import {getPosts} from "../post/posts.ts";
import {IPosts} from "../post/posts.ts";
import {Post} from "../post/post.tsx";


export const Posts = () =>{
    const [posts, setPosts] = useState<IPosts[]> ([]);
    useEffect( () => {
        getPosts()
            .then (response =>{
                setPosts(response.posts)
            })
    }, []);

    return(
        <div>
            {
                posts.map((post) => <Post post={post} key={post.id}/>)
            }
        </div>
    )
}