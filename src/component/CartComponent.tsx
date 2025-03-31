import {ICart} from "../models/ICart.ts";
import {FC} from "react";

type PropsTypeCart ={
    cart: ICart
}
export const CartComponent: FC<PropsTypeCart> = ({cart}) =>{
    return(
        <div>
            {cart.totalProducts} {cart.totalQuantity}
        </div>
    )
}