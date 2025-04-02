import {IUserModel} from "../models/IUserModel.ts";

const baseUrl = 'https://dummyjson.com';

export const getAllUsers = async(pg : string): Promise<IUserModel> =>{
        const limit = 30
        const skip = limit * (+pg) - limit
        return await fetch (baseUrl + '/users' + '?skip=' + skip)
            .then(value => value.json())


}