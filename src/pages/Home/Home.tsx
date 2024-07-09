import React from "react";

import { CardList } from "../../widgets/cardList";
import {Container} from "../../shared/ui/container";
const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <CardList></CardList>
      </Container>
    </div>
  );
};

export default Home;
