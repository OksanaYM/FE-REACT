import {useEffect, useState} from "react";
import {getAll} from "../services/allService.ts";
import {IBase} from "../models/IBase.ts";
import {IPost} from "../models/IPost.ts";
import {PostComponent} from "../component/PostComponent.tsx";


export const PostsComponent =() =>{
    const [posts, setPosts] = useState<IPost[]> ( [])
    useEffect(() => {
        getAll<IBase & {posts:IPost[]}> ('/posts')
            .then(({posts}) => setPosts(posts))
    }, []);

    return (
        <div>{
            posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)

        }
        </div>
    )
}