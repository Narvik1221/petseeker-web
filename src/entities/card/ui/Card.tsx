import React from "react";
import * as stylex from "@stylexjs/stylex";
import styles from "./card.style";

export interface Card {
  id: number;
  name: string;
  price: string;
  geo: string;
  images?: string[];
}

interface ICard {
  description: Card;
  children?: React.ReactNode;
}
export const Card: React.FC<ICard> = ({ description, children }) => {
  return (
    <div    {...stylex.props(styles.cardContainer)}>
      <h3>Имя {description.name}</h3>
      <div>Цена {description.price}</div>
      <div>Гео {description.geo}</div>
      <ul {...stylex.props(styles.cardImageContainer)}>
        {description.images?.map((image,index) => (
          <li key={index} {...stylex.props(styles.cardImage)}>
            <img src={image} alt="Фото питомца" />
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};
