import './header.css'
import {UserInfo} from "../UserInfo/UserInfo.tsx";
export const Header = () => {
    return (
        <nav>
            <h1>MOVIES:</h1>
            <UserInfo/>
        </nav>
    );
}