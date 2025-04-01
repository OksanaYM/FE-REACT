import {IUser} from "./IUser.ts";

export interface IUserModel {
    users: IUser;
    total: number;
    limit: number;
    skip: number

}