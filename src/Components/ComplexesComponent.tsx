import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../Slices/UserSlice.ts";
import {postAction} from "../Slices/PostSlice.ts";
import {commentAction} from "../Slices/CommentSlice.ts";
import {IUser} from "../Models/IUser.ts";
import {UserComponent} from "../Component/UserComponent.tsx";
import {IPost} from "../Models/IPost.ts";
import {PostComponent} from "../Component/PostComponent.tsx";
import {IComment} from "../Models/IComment.ts";
import {CommentComponent} from "../Component/CommentComponent.tsx";

export const ComplexesComponent = () =>{
    const dispatch= useAppDispatch()
    const {commentStoreSlice: {comments}, postStoreSlice: {posts}, userStoreSlice: {users}} = useAppSelector((state)=> state)
    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers())
        }
        if(!posts.length){
            dispatch(postAction.loadPosts())
        }
        if(!comments.length){
            dispatch(commentAction.loadComments())
        }
    }, []);
    return(
        <>
            {users.map((user:IUser)  =>
                <UserComponent key={user.id} user={user} />)}
            {posts.map((post:IPost) =>
                <PostComponent key={post.id} post={post}/>)}
            {comments.map((comment:IComment) =>
                <CommentComponent key={comment.id} comment={comment}/>)}
        </>
    )
}