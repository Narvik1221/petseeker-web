import React from "react";

import { PetList } from "../../widgets/petList";
import {MainContainer} from "../../shared/ui/mainContainer";
export  const Main: React.FC = () => {
  return (
      <MainContainer>
        <PetList></PetList>
      </MainContainer>
  );
};


