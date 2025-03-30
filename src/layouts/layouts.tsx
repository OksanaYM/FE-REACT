import {Outlet} from "react-router-dom";
import {Menu} from "../menu/menu.tsx";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}