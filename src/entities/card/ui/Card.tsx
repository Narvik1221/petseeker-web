import React from "react";
import * as stylex from "@stylexjs/stylex";
import styles from "./card.style";

export interface Card {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface ICard {
  description: Card;
  children?: React.ReactNode;
}
export const Card: React.FC<ICard> = ({ description, children }) => {
  return (
    <div key={description.id} {...stylex.props(styles.cardContainer)}>
      <h3>{description.title}</h3>
      <h3>{description.body}</h3>
      <div>{children}</div>
    </div>
  );
};
