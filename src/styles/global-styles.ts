import { createGlobalStyle } from 'styled-components';
import { colors, sizes } from './variables';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: ${sizes.main};
    font-weight: 400;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${colors.black50};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .main-screen {
    margin: 0 auto;
    max-width: 600px;
  }

  /* h1 {
    font-size: 2.2857142857142856rem;
    font-weight: 600;
  } */
`;
