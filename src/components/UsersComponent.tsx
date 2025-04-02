import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";

import {IUserModel} from "../models/IUserModel.ts";
import {UserComponent} from "../component/UserComponent.tsx";
import {getAllUsers} from "../services/api.service..ts";

export const UsersComponent = () =>{
    const [users, setUsers] = useState<IUser[]> ([])
    useEffect( () => {
        getAllUsers( '1')
            .then( ({users}: IUserModel) =>{
                setUsers(users)
            })

    }, []);
    return(
        <div>{
            users.map((user: IUser) =>
            <UserComponent key={user.id} user={user}/>)
        }
        </div>
    )
}