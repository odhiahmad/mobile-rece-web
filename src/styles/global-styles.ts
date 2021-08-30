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
    background-color: ${colors.white100};
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
    font-family: 'Open Sans', sans-serif;
  }

  .main-screen {
    margin: 0 auto;
    max-width: 500px;
  }

  .screen {
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 500px) {
    .screen {
      padding-top: 2rem;
    }
  }

  a {
    color: ${colors.main};
    text-decoration: none;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  .MuiToolbar-root, .MuiPickersDay-current, .MuiPickersDay-daySelected {
    background-color: ${colors.main} !important;
  }

  .MuiPickersDay-current {
    color: ${colors.black50} !important;
  }

  .MuiButton-textPrimary {
    color: ${colors.main} !important;
  }

  /* h1 {
    font-size: 2.2857142857142856rem;
    font-weight: 600;
  } */
`;
