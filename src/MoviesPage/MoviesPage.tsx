import {Outlet} from "react-router-dom";

export const MoviesPage = () =>{
    return(
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}