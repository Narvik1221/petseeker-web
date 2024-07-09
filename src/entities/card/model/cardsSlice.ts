import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../ui/Card';

export interface CardState {
  cards: Card[];
  loading: boolean;
  error: string | null;
}

const initialState: CardState = {
  cards: [],
  loading: false,
  error: null,
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchCardsStart(state) {
      state.loading = true;
      state.error = null;
      console.log('начало')
    },
    fetchCardsSuccess(state, action: PayloadAction<Card[]>) {
      state.loading = false;
      state.cards = action.payload;
      console.log('получили')
    },
    fetchCardsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      console.log('ошибка')
    },
  },
});

export const {
  fetchCardsStart,
  fetchCardsSuccess,
  fetchCardsFailure,
} = cardSlice.actions;

export default cardSlice.reducer;
