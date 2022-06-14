import React from "react";
import { InitialPage } from "./pages/InitialPage";
import GlobalStyle from "./styles/global";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <InitialPage />
    </>
  );
};
