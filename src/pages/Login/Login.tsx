import React from "react";
import { Auth } from "../../widgets/auth";
import { MainContainer } from "../../shared/ui/mainContainer";
export const Login: React.FC = () => {
  return (
    <MainContainer>
      <Auth></Auth>
    </MainContainer>
  );
};
