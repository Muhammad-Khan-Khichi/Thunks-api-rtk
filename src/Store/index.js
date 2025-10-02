import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slices/userSlice";
import { albumApi } from "./apis/albumApi";
import { setupListeners } from "@reduxjs/toolkit/query";



const store = configureStore({
    reducer: {
        users: userReducer,
        [albumApi.reducerPath]: albumApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumApi.middleware)
    }
});

setupListeners(store.dispatch)

export default store

export * from './thunks/fetchUsers'
export * from './thunks/addUsers'
export * from './thunks/removeUser'
export {useFetchAlbumQuery} from './apis/albumApi'
