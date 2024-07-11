import type { FC } from "react";
import styles from "./petCard.module.scss";
import { Card } from "../index";

type CardProps = {
  description: Card;
  children?: React.ReactNode;
};
export const PetCard: FC<CardProps> = ({ description, children }) => {
  return (
    <div className={styles.card__container}>
      <h3>Имя {description.name}</h3>
      <div>Цена {description.price}</div>
      <div>Гео {description.geo}</div>
      <ul className={styles.card__image_container}>
        {!!description.images &&
          description.images?.map((src, index) => (
            <li key={index} className={styles.card__image}>
              <img src={src} alt="Фото питомца" />
            </li>
          ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};
