import { configureStore } from "@reduxjs/toolkit";

import cardsReducer,{CardState} from "../entities/pet/model/petsSlice";
import userReducer from "../entities/user/model/userSlice";
import { baseApi } from "../shared/api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cards: cardsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // добавляем userApi.middleware
});
export type RootState = {
  cards: CardState;
};

export type AppDispatch = typeof store.dispatch;