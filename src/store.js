import { configureStore } from "@reduxjs/toolkit";
import { commentsSliceReducer } from "./features/comment/commentsSlice";

console.log(commentsSliceReducer)

export const store = configureStore({
    reducer: {
        commments: commentsSliceReducer
    }
})