import {IUser} from "./IUser.ts";

export interface IUserModel{
    total: number;
    limit: number;
    skip: number;
    users : IUser[]
}