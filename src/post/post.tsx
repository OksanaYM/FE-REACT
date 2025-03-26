import {IPostsDummy} from "./posts.ts";
import {FC} from "react";

export const Post: FC<{post:IPostsDummy}> = ({post:{skip, total, limit}}) =>{
    return(
        <div>{total} {limit} {skip}</div>
    )
};