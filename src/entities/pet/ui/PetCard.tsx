import type { FC } from "react";
import styles from "./petCard.module.scss";
import { Pet } from "../index";

type PetProps = {
  description: Pet;
  actionSlots?: React.ReactNode;
};


export const PetCard: FC<PetProps> = ({ description, actionSlots }) => {
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
      <div>{actionSlots}</div>
    </div>
  );
};
