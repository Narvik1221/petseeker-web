import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../api/fetchCards";
import { RootState, AppDispatch } from "../../../app/store";
import {
  fetchCardsStart,
  fetchCardsSuccess,
  fetchCardsFailure,
} from "./cardsSlice";
export const useCards = () => {
  const dispatch = useDispatch<AppDispatch>();
 
  const loading = useSelector((state: RootState) => state.cards.loading);
  const cards = useSelector((state: RootState) => state.cards.cards);
  const error = useSelector((state: RootState) => state.cards.error);

  useEffect(() => {
    if (cards.length === 0) {
      const getCards = async () => {
        dispatch(fetchCardsStart());
        try {
          const data = await fetchCards();

          dispatch(fetchCardsSuccess(data.pets));
        } catch (err) {
          dispatch(fetchCardsFailure("Failed to fetch products"));
        }
      };

      getCards();
    }
  }, [dispatch, cards.length]);

  return { cards, loading, error };
};
