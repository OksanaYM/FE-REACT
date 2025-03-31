import {Link} from "react-router-dom";

export const Menu = () =>{
    return(
        <ul>
            <li>
                <Link to={'/users'}>Users</Link>
            </li>
        </ul>
    )
}