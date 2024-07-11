import { useGetCardsQuery } from '../index';
import { useAppSelector } from './hook';

export const useCards = () => {
  const { data: cards, error, isLoading } = useGetCardsQuery();
  const cardsState = useAppSelector((state) => state.cards);


  
  return {
    cards: cards || cardsState.cards,
    loading: isLoading || cardsState.loading,
    error: error || cardsState.error,
  };
};
