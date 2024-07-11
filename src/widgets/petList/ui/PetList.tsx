import React from "react";
import { PetCard } from "../../../entities/pet";
 import { useCards } from "../../../entities/pet";
import styles from './card.module.scss'
import {SaveCard} from "../../../features/pet/savePet";

export const PetList: React.FC = () => {
  const { cards, loading, error } = useCards();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (cards?.length === 0) {
    return <p>No cards available.</p>;
  }
  return (
    <div className={styles.card_list_container}>
      {cards?.pets?.map((card) => (
        <PetCard key={card.id} description={card} children={<SaveCard></SaveCard>} />
      ))}
    </div>
  );
};


