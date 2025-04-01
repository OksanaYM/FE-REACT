import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../models/ICart.ts";

export const CartsComponent =() =>{
    const{id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if (id){


        }
    }, []);

}