import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserSliceType} from "../Models/UserSliceType.ts";
import {getAll} from "../services/api.Services.ts";
import {IUser} from "../Models/IUser.ts";


const initUserSliceState: UserSliceType = {users: []}

const loadUsers = createAsyncThunk('loadUsers', async (_, thunkAPI) =>{
    const users = await getAll<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users)
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers:{},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) =>{
        state.users = action.payload
    })
})

export const userActions = {... userSlice.actions, loadUsers}