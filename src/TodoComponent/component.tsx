import {FC} from "react";
import {IUser} from "../TodoComponents/components.ts";
import './component.css'

export const User: FC<{user:IUser}> =({user:{id, userId, title, completed}}) =>{
    return(
        <div className={'main'}> <h2>{id}</h2>
            <div><h4>{userId} Title: {title}</h4></div>
            <p>{completed.toString()}</p>
        </div>
    );
};