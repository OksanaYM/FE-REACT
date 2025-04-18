import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";

import {postAction} from "../Slices/PostSlice.ts";
import {IPost} from "../Models/IPost.ts";
import {PostComponent} from "../Component/PostComponent.tsx";

export const PostsComponent = () =>{
    const dispatch = useAppDispatch()
    const posts = useAppSelector ((state) => state.postStoreSlice.posts)
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);
    return (
        <>
            {posts.map((post:IPost) =>
            <PostComponent key={post.id} post={post}/>)}
        </>
    )
}
