import {Outlet} from "react-router-dom";
import {MoviesPage} from "../MoviesPage/MoviesPage.tsx";
import {Header} from "../Header/Header.tsx";

export const MainLayout =() =>{
    return(
        <>
            <Header/>
            <MoviesPage/>
            <Outlet/>
        </>
    )
}