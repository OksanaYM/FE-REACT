import {Outlet} from "react-router-dom";
import {UsersPage} from "../page/UsersPage.tsx";


export const MainLayout = () =>{
    return( <div>
            <UsersPage/>
            <Outlet/>
        </div>
    )
}