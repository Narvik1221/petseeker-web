import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../index";
import { cardsApi } from "../index";
export type CardState = {
  cards: Card[];
  loading: boolean;
  error: string | null;
};

const initialState: CardState = {
  cards: [],
  loading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(cardsApi.endpoints.getCards.matchPending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addMatcher(
      cardsApi.endpoints.getCards.matchFulfilled,
      (state, action: PayloadAction<Card[]>) => {
        state.cards = action.payload;
        state.loading = false;
      }
    );
    builder.addMatcher(
      cardsApi.endpoints.getCards.matchRejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cards";
      }
    );
  },
});

export default cardsSlice.reducer;
