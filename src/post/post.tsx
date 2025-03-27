import {IPosts} from "./posts.ts";
import {FC} from "react";

export const Post: FC<{post:IPosts}> = ({post:{id, title, body, tags, reactions, views}}) =>{
    return(
        <div>
            <h2>{id} - {title}</h2>
            <p>{body}</p>
            <ul>
                {tags.map((tag, index) =>
                <li key={index}>{tag}</li>}
            </ul>
            <h6>Likes: {reactions.likes}; dislikes: {reactions.dislikes}</h6>
            <p>{views}</p>
        </div>
    )
};