import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import counterReducer from "../features/counter/counterSlice";
import repositoryReducer from "../features/repositories/repositorySlice";

import { repositoryApi } from "../features/repositories/repositoryAPI";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    repository: repositoryReducer,
    [repositoryApi.reducerPath]: repositoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(repositoryApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);
