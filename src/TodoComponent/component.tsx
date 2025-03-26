import {FC} from "react";
import {IUser} from "../TodoComponents/components.ts";

export const User: FC<{user:IUser}> =({user:{id, userId, title, completed}}) =>{
    return(
        <div>{id} {userId} {title} {completed.toString()}</div>
    );
};