import {IUser} from "../models/IUser.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type UserTypeProps = {
    user: IUser
}
export const UserComponent: FC<UserTypeProps> =({user}) =>{
    const navigate = useNavigate()
    const buttonOnClick = () =>{
        navigate('/users/' + user.id + '/carts')
    }
    return(
        <div> {user.firstName} {user.lastName}
            <img src={user.image} alt={user.username}/>

            <button onClick={buttonOnClick}>DETAIL</button>

        </div>
    )

}