import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import globalSlice from "./slices/global/slice";

// Create persistConfig
const persistConfig = {
  key: "root", // Change this key as per your application needs
  storage,
  // Add any specific reducer keys you want to persist
  whitelist: [],
};

// Wrap your reducers with persistReducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    global: globalSlice,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

// Create persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
