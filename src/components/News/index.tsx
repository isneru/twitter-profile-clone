import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
  text: string;
}

export const News: React.FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{text}</strong>
    </Container>
  );
};
