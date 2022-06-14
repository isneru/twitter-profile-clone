import React from "react";
import { Container } from "./styles";

interface InitialPageProps {}

export const InitialPage: React.FC<InitialPageProps> = () => {
  return (
    <Container>
      <h1>neru's CRA with TypeScript and styled-components template.</h1>
    </Container>
  );
};
