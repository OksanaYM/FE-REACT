import {useContext} from "react";
import {MyContext} from "../Context/MyContext.tsx";
import './theme.css'

export const ABranchA = () =>{
    const {theme} = useContext(MyContext)
    return(
        <div className={theme}>

        </div>
    )
}