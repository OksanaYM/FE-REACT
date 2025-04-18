import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../Slices/UserSlice.ts";
import {postSlice} from "../Slices/PostSlice.ts";
import {commentSlice} from "../Slices/CommentSlice.ts";
import {useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer:{
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer

    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()