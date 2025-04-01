import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";

export const UsersComponent = () =>{
    const [users, SetUsers] = useState<IUser[]> ([])
    useEffect(() => {

    }, []);
    return(
        <>
        </>
    )
}