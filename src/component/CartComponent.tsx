import {FC} from "react";
import {ICart} from "../models/ICart.ts";

type PropsTypeCart={
    cart: ICart
}

export const CartComponent:FC<PropsTypeCart> =({cart}) =>{
    return(
        <div>
            {cart.totalProducts}
        </div>
    )
}