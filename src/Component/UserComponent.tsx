import {FC} from "react";
import {IUser} from "../Models/IUser.ts";

type TypeUser = {
    user: IUser


}

export const UserComponent: FC<TypeUser> = ({user}) =>{
    return(
        <div>
            <h3>{user.id} {user.name} {user.username}</h3>
            <p>{user.email}</p>
        </div>

    )
}