import React from "react";

import { Container, Wrapper } from "./styles";

import { MenuBar } from "../../components/MenuBar";
import { Main } from "../../components/Main";
import { SideBar } from "../../components/SideBar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};
