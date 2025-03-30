import {IPost} from "../models/IPost.ts";


export interface PostComponentProps {
    post: IPost
}


export const PostComponent =({post}: PostComponentProps) =>{
    return(
        <>
            <div>{post.title}</div>
        </>
    )

}