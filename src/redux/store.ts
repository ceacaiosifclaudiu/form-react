import { configureStore } from '@reduxjs/toolkit'
import userHaveAccountReducer from './userHaveAccountSlice'
import userAccountReducer from "./userAccountSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const persistedUserhaveAccount = persistReducer(persistConfig, userHaveAccountReducer);
const persisteduserAccountReducer = persistReducer(persistConfig, userAccountReducer);


export const store = configureStore({
    reducer: {
        userHaveAccount: persistedUserhaveAccount,
        user: persisteduserAccountReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch