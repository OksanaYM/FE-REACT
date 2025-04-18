import {Outlet} from "react-router";
import {Menu} from "../Menu/Menu.tsx";

export const MainLayout = () =>{
    return(
        <>
        <Menu/>
        <Outlet/>
        </>
    )
}