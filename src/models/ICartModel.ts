
import {ICart} from "./ICart.ts";

export interface ICartModel {
    carts: ICart[];
    total: number;
    limit: number;
    skip: number

}