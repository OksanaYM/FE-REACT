import {Outlet} from "react-router-dom";
import {MoviesPage} from "../MoviesPage/MoviesPage.tsx";

export const MainLayout =() =>{
    return(
        <>
            <MoviesPage/>
            <Outlet/>
        </>
    )
}