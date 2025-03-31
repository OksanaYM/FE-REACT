import {ICart} from "./ICart.ts";


export interface ICartModel{
     total: number;
     limit: number;
     skip: number;
     carts: ICart[]
 }