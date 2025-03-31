import {Menu} from "../menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>

    )
}