
import {FC} from "react";
import {IPost} from "../Models/IPost.ts";

type TypePost = {
    post: IPost


}

export const PostComponent: FC<TypePost> = ({post}) =>{
    return(
        <div>
            <h3>{post.id} - {post.userId} {post.title}</h3>
            <p>{post.body}</p>
        </div>

    )
}