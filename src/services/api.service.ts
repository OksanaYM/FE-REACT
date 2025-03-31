import {IUserModel} from "../models/IUserModel.ts";
import {ICartModel} from "../models/ICartModel.ts";

const baseUrl = 'https://dummyjson.com'

export const userService ={
    getAllUsers: async(): Promise<IUserModel> =>{
        return await fetch (baseUrl + '/users')
            .then(value => value.json())
    }
};

export const cartService ={
    getAllCartsOfUser : async(userId: string): Promise<ICartModel> =>{
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(value => value.json())
    }
}