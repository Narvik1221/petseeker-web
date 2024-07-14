import React from "react";
import { AuthWidget } from "../../widgets/authWidget"
import { MainContainer } from "../../shared/ui/mainContainer";
export const Auth: React.FC = () => {
  return (
    <MainContainer>
      <AuthWidget></AuthWidget>
    </MainContainer>
  );
};
