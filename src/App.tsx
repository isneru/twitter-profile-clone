import React from "react";
import { Layout } from "./pages/Layout";
import GlobalStyle from "./styles/global";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
};
