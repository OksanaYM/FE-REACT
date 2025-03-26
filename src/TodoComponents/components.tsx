import {useEffect, useState} from "react";
import {getUsers} from "./components.ts";
import {IUser} from "./components.ts";
import {User} from "../TodoComponent/component.tsx";


export const UsersComponents = ()=> {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect( ()=>{
        getUsers()
            .then(response => {
                setUsers(response)
            });

    }, []);

    return (
       <div>
           {
           users.map(user => <User user={user} key={user.id} />)
       }

       </div>
    );
};


