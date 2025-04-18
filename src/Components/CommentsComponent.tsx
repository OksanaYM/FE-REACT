import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentAction} from "../Slices/CommentSlice.ts";
import {IComment} from "../Models/IComment.ts";
import {CommentComponent} from "../Component/CommentComponent.tsx";

export const CommentsComponent = () =>{
    const dispatch = useAppDispatch()
    const comments = useAppSelector((state) => state.commentStoreSlice.comments)
    useEffect(() => {
        dispatch(commentAction.loadComments())
    }, []);
    return (
        <div>
            {comments.map((comment:IComment) =>
            <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    )
}
