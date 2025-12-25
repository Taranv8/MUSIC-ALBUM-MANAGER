import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./albums/albumSlice";

export const store = configureStore({
  reducer: {
    albums: albumReducer,
  },
});

// Types for useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
