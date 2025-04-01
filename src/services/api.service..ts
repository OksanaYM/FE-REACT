import {IUserModel} from "../models/IUserModel.ts";

const baseUrl = 'dummyjson.com'

export const userService = {
    getAllUsers : async(): Promise<IUserModel> =>{
        return await fetch (baseUrl + '/users')
            .then(value => value.json())

    }

}