import {IUser} from "../models/IUser.ts";


export interface UserComponentProps {
    user: IUser
}


export const UserComponent =({user}: UserComponentProps) =>{
    return(
        <>
           <div>{user.username}</div>
        </>
    )

}