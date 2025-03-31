import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ICart} from "../models/ICart.ts";
import {ICartModel} from "../models/ICartModel.ts";
import {CartComponent} from "../component/CartComponent.tsx";
import {cartService} from "../services/api.service.ts";

export const CartsComponent = () =>{
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>( [])

    useEffect(() => {
        if (id){
            cartService.getAllCartsOfUser(id)
                .then(({carts}: ICartModel) =>{
                    setCarts(carts)
                })
        }

    }, [id]);
    return (
        <div>{
            carts.map((cart:ICart)=>
            <CartComponent key={cart.id} cart={cart}/>)

        }


        </div>
    )
}