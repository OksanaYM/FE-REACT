import {CartComponent} from "../component/CartComponent.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../models/ICart.ts";
import {cartService} from "../services/api.services.ts";
import {ICartModel} from "../models/ICartModel.ts";

export const CartsComponent =() =>{
    const {id} = useParams()
    const[carts, setCarts] = useState<ICart[]> ( [])
    useEffect(() => {
        if (id){
            cartService.getAllCartsOfUser(id)
                .then(({carts}: ICartModel) =>{
                    setCarts(carts)
                })

        }

    }, [id]);
    return(
        <div>
            { carts.map((cart:ICart)=>
                <CartComponent key={cart.id} cart={cart}/>)
            }

        </div>
    )
}