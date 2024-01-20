import { Reducer, configureStore } from "@reduxjs/toolkit";

import appointmentSlice, { RootSlice } from "./appointmentSlice";

export interface RootState {
  slice: RootSlice,
  groomingApi: Reducer
}

export const store = configureStore({
  reducer: {
    slice: appointmentSlice
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type RootDispatch = typeof store.dispatch;