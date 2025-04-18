
import {FC} from "react";
import {IComment} from "../Models/IComment.ts";

type TypeComment = {
    comment: IComment


}

export const CommentComponent: FC<TypeComment> = ({comment}) =>{
    return(
        <div>
            <h3>{comment.id} - {comment.postId} {comment.name}</h3>
            <p>{comment.body}</p>
        </div>

    )
}