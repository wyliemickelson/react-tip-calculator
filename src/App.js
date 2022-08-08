import React from "react";
import { GlobalStyles } from "./Styles/Global.styled";
import styled from 'styled-components';
import Main from "./Components/Main";
import Header from "./Components/Header";

const AppContainer = styled.div`
  background-color: hsl(185, 41%, 84%);
`

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Main />
    </AppContainer>
  );
}

export default App;
