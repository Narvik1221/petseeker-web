import React from "react";
import { Pet, PetCard } from "../../../entities/pet";
import { useGetPetsQuery } from "../../../entities/pet";
import styles from "./card.module.scss";
import { SaveCard } from "../../../features/pet/savePet";
import { match, P } from "ts-pattern";
export const PetList: React.FC = () => {
  const { data: pets, isLoading, isError } = useGetPetsQuery();

  return (
    <>
      {match({ isLoading, isError, pets })
        .with({ isLoading: true }, () => <div>Loading...</div>)
        .with({isError:true }, () => <div>Error: </div>)
        .with({ pets: { length: 0 } }, () => <p>No pets available.</p>)
        .otherwise(() => (
          <div className={styles.card_list_container}>
            {pets?.pets?.map((pet: Pet) => (
              <PetCard
                key={pet.id}
                description={pet}
                actionSlots={<SaveCard></SaveCard>}
              />
            ))}
          </div>
        ))}
    </>
  );
};
