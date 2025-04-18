import {PostSliceType} from "../Models/PostSliceType.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.Services.ts";
import {IPost} from "../Models/IPost.ts";

const initPostSliceState: PostSliceType = {posts: []}

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) =>{
    const posts = await getAll<IPost[]>('/posts')
    return thunkAPI.fulfillWithValue(posts)
})

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers:{},
    extraReducers: builder => builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) =>{
        state.posts = action.payload
    })
})

export const postAction = {... postSlice.actions, loadPosts}