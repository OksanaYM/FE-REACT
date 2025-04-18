import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../Slices/UserSlice.ts";
import {UserComponent} from "../Component/UserComponent.tsx";
import {IUser} from "../Models/IUser.ts";

export const UsersComponent = () =>{
    const dispatch = useAppDispatch()
    const users = useAppSelector ((state) => state.userStoreSlice.users)
    useEffect( () =>{
        dispatch (userActions.loadUsers())
    }, [])
    return (
        <div>
            {users.map((user:IUser)  =>
                <UserComponent key={user.id} user={user} />)}
        </div>
    )
}