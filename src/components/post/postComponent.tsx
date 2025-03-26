import {IModelPost} from "../../models/modelPost.ts";
import {FC} from "react";
import './post.css'

export const Post: FC<{post: IModelPost}> = ({post:{id, userId, title, body}}) => {
    return(
        <div className={'main'}>
            <h2>{id}</h2>
            <h4>{userId} Title: {title} </h4>
            <p>{body}</p>
        </div>
    );

};