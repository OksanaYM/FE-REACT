import {UsersComponent} from "../components/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () =>{
    return(
        <>
            <UsersComponent/>
            <br/>
            <Outlet/>
            <br/>

        </>
    )
}