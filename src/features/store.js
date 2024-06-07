import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import searchReducer from "./Search/SearchSlice";
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
    key: "root",
    storage: storageSession,
  };
  
const persistedReducer = persistReducer(persistConfig, searchReducer);  

export const store = configureStore({
    reducer:{
        search: persistedReducer
    }
})
export const persistor = persistStore(store);

