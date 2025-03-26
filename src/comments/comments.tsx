import {useEffect, useState} from "react";
import {IComments} from "./components.ts";
import {getComments} from "./components.ts";
import {Comment} from "../comment/comment.tsx";

export const Comments =() => {
    const [comments, setComments] = useState<IComments[]> ([]);
    useEffect(() => {
        getComments()
            .then(response =>{
                setComments(response)
            })
    }, []);
    return(
        <div>{
            comments.map(comment => <Comment comment={comment} key={comment.id}/>)
        }
        </div>
    )

}

