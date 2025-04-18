import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../Slices/UserSlice.ts";
import {postAction} from "../Slices/PostSlice.ts";
import {commentAction} from "../Slices/CommentSlice.ts";

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
        </>
    )
}