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
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice.js";
import { filtersReducer } from "./filters/slice.js";
import { userProductsReducer } from "./userProducts/slice.js";
import { authReducer } from "./auth/slice.js";

const userProductsPersistConfig = {
  key: "userProducts",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    userProducts: persistReducer(
      userProductsPersistConfig,
      userProductsReducer
    ),
    auth: persistReducer(authPersistConfig, authReducer),
    products: productsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
