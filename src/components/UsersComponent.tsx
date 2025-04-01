import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {userService} from "../services/api.service..ts";
import {IUserModel} from "../models/IUserModel.ts";
import {UserComponent} from "../component/UserComponent.tsx";

export const UsersComponent = () =>{
    const [users, setUsers] = useState<IUser[]> ([])
    useEffect( () => {
        userService.getAllUsers()
            .then( ({users}: IUserModel) =>{
                setUsers(users)
            })

    }, []);
    return(
        <>{
            users.map((user: IUser) =>
            <UserComponent key={user.id} user={user}/>)
        }
        </>
    )
}