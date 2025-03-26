import {useEffect, useState} from "react";
import {getPosts} from "../post/posts.ts";
import {IPostsDummy} from "../post/posts.ts";
import {Post} from "../post/post.tsx";

export const Posts = () =>{
    const [posts, setPosts] = useState<IPostsDummy[]> ([]);
    useEffect( () => {
        getPosts()
            .then (response =>{
                setPosts(response)
            })
    }, []);

    return(
        <div>
            {
                posts.map((post: IPostsDummy, index:number) => <Post post={post} key={index}/>)
            }
        </div>
    )
}