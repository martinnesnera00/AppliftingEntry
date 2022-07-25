import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { messageMiddleware } from "./MessageMiddleware";

import { api } from "../slices/APISlice";
import authReducer from "../slices/AuthSlice";
import messageReducer from "../slices/MessageSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, api.middleware, messageMiddleware],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
