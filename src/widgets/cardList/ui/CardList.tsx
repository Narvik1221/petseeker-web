import React from "react";
import { Card } from "../../../entities/card";
import { useCards } from "../../../entities/card";
import styles from "./card.style";
import stylex from "@stylexjs/stylex";
import {SaveCard} from "../../../features/saveCard";

export const CardList: React.FC = () => {
  const { cards, loading, error } = useCards();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (cards.length === 0) {
    return <p>No cards available.</p>;
  }
  return (
    <div {...stylex.props(styles.cardListContainer)}>
      {cards.map((item) => (
        <Card key={item.id} description={item} children={<SaveCard></SaveCard>} />
      ))}
    </div>
  );
};


