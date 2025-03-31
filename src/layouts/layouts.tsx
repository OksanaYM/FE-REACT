import {Outlet} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";

export const MainLayout = () =>{
    return(
        <div>
            <UsersPage/>
            <Outlet/>
        </div>
    )
 }