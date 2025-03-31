import {IUser} from "../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

type PropsTypeUser = {
    user: IUser
}


export const UserComponent: FC<PropsTypeUser> =  ({user}) =>{
    const navigate = useNavigate()


    const buttonOnClick = () =>{
        navigate('/users/' + user.id + '/carts')
    }

    return <div>
    {user.username}: {user.email}

    <button onClick={buttonOnClick}>Detail</button>

    </div>
}