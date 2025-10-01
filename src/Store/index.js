import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slices/userSlice";



const store = configureStore({
    reducer: {
        users: userReducer,
    }
})

export default store

export * from './thunks/fetchUsers'
export * from './thunks/addUsers'
export * from './thunks/removeUser'
