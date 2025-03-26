import './comment.css'
import {IComments} from "../comments/components.ts";
import {FC} from "react";

export const Comment: FC<{comment:IComments}> = ({comment:{id, postId, name, email, body}}) =>{
    return(
        <div className={'main'}> <h2>{id}</h2> <h4>{postId} - {name}</h4>
            <h5>e-mail: {email}</h5>
            <p>{body}</p>
        </div>
    )
}