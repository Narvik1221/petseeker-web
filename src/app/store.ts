import { configureStore } from "@reduxjs/toolkit";

import cardsReducer, { CardState } from "../entities/card/model/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export type RootState = {
  cards: CardState;
};

export type AppDispatch = typeof store.dispatch;
