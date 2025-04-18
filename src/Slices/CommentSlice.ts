import {CommentSliceType} from "../Models/CommentSliceType.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.Services.ts";
import {IComment} from "../Models/IComment.ts";

const initCommentSliceState: CommentSliceType ={comments: []}

const loadComments = createAsyncThunk('loadComments', async(_, thunkAPI) =>{
    const comments = await getAll<IComment[]>('/comments')
    return thunkAPI.fulfillWithValue(comments)
})

export const commentSlice = createSlice({
    name: 'comment Slice',
    initialState: initCommentSliceState,
    reducers:{},
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) =>{
        state.comments = action.payload
    })

})

export const commentAction = {... commentSlice.actions, loadComments}