import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {getAll} from "../services/allService.ts";
import {IBase} from "../models/IBase.ts";
import {UserComponent} from "../component/UserComponent.tsx";



export const UsersComponent =() =>{
    const [users, setUsers] = useState<IUser[]> ( [])
        useEffect(() => {
            getAll<IBase & {users:IUser[]}> ('/users')
                .then(({users}) => setUsers(users))
        }, []);

        return (
            <div>{
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)

            }
            </div>
        )
    }