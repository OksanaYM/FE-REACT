import {IUserModel} from "../models/IUserModel.ts";

const baseUrl = 'https://dummyjson.com';

export const getAllUsers = async(page : string): Promise<IUserModel> =>{
        let skip = 0;
        const limit = 30;
        if (+page >0){
                skip = limit * (+page) - limit
        }
        const response =  await fetch (baseUrl + '/users' + '?skip=' + skip)
            .then(value => value.json())
        return response


}