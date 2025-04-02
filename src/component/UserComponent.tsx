import {IUser} from "../models/IUser.ts";

type UserTypeProps = {
    user: IUser
}
export const UserComponent =({user}: UserTypeProps) =>{

    return(
        <div> {user.firstName} {user.lastName}


        </div>
    )

}