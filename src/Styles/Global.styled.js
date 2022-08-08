import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  * {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Space Mono', monospace;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: hsl(183, 100%, 15%);
    font-weight: 700;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  img, svg {
    max-width: 100%;
  }

  button {
    border: none;
    width: 100%;
  }

  button:hover {
    cursor: pointer;
  }
`