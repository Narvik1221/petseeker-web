import React from "react";
import { Card } from "../../../entities/card";
import { useCards } from "../../../entities/card";
import styles from "./card.style";
import stylex from "@stylexjs/stylex";
// interface ProductListProps {
//   onAddToCart: (productId: number) => void;
// }

export const CardList: React.FC = () => {
  const { cards, loading, error } = useCards();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div {...stylex.props(styles.cardListContainer)}>
      {cards.map((item) => (
        <Card description={item} />
      ))}
    </div>
  );
};


