import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";

import {IUserModel} from "../models/IUserModel.ts";
import {UserComponent} from "../component/UserComponent.tsx";
import {getAllUsers} from "../services/api.service..ts";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () =>{
    const [searchParams] = useSearchParams({page: '1'})
    const [users, setUsers] = useState<IUser[]> ([])
    useEffect( () => {
        const currentPage = searchParams.get('page') || '1'
        getAllUsers( currentPage)
            .then( ({users}: IUserModel) =>{
                setUsers(users)
            })

    }, [searchParams]);
    return(
        <div>{
            users.map((user: IUser) =>
            <UserComponent key={user.id} user={user}/>)
        }
        </div>
    )
}