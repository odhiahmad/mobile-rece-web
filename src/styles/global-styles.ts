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

  .radio {
    position: relative;
    cursor: pointer;
    line-height: 20px;
    font-size: 14px;
    /* margin: 15px; */
    .label {
      position: relative;
      display: block;
      float: left;
      margin-right: 10px;
      width: 20px;
      height: 20px;
      border: 2px solid gray;
      border-radius: 100%;
      -webkit-tap-highlight-color: transparent;
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: ${colors.main};
        transform: scale(0);
        transition: all .2s ease;
        opacity: .08;
        pointer-events: none;
      }
    }
    input[type="radio"]:checked + .label {
      border-color: ${colors.main};
      &::after {
        transform: scale(1);
        transition: all .2s cubic-bezier(.35,.9,.4,.9);
        opacity: 1;
      }
    }
  }


  .checkbox {
    display: inline-block;
    /* padding: 10px 20px; */
    transform: translateZ(0); // Force 3d rendering
    label {
      cursor: pointer;
      padding-left: 0; // Reset for Bootstrap rule
    }

    // Hide native checkbox
    input[type=checkbox] {
      opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      left: 0;
      pointer-events: none;
    }

    .checkbox-material {
      vertical-align: middle;
      position: relative;
      top: 3px;
      &:before {
        position: absolute;
        left: 8px;
        top: 2px;
        content: "";
        background-color: ${colors.main};
        height: 4px;
        width: 4px;
        border-radius: 100%;
        z-index: 1;
        opacity: 0;
        margin: 0;
        //transform: scale3d(2.3, 2.3, 1);
      }

      .check {
        position: relative;
        display: inline-block;
        width: 17px;
        height: 17px;
        border: 2px solid;
        border-radius: 2px;
        overflow: hidden;
        z-index: 1;
        color: ${colors.main}
      }
      .check:before {
        position: absolute;
        content: "";
        transform: rotate(45deg);
        display: block;
        margin-top: -5px;
        margin-left: 4px;
        width: 0;
        height: 0;
        box-shadow:
          0 0 0 0,
          0 0 0 0,
          0 0 0 0,
          0 0 0 0,
          0 0 0 0,
          0 0 0 0,
          0 0 0 0 inset;
        animation: checkbox-off 0.3s forwards ease-out;
      }
    }

    input[type=checkbox]:focus + .checkbox-material .check:after {
      opacity: 0.2;
    }
    input[type=checkbox]:checked + .checkbox-material .check:before {
      box-shadow:
        0 0 0 10px,
        10px -10px 0 10px,
        32px 0px 0 20px,
        0px 32px 0 20px,
        -5px 5px 0 10px,
        20px -12px 0 11px;
      animation: checkbox-on 0.3s forwards ease-out;
    }
    
    input[type=checkbox]:not(:checked) + .checkbox-material:before {
      animation: rippleOff 700ms forwards ease-out;
    }
    input[type=checkbox]:checked + .checkbox-material:before {
      animation: rippleOn 700ms forwards ease-out;
    }

    // Ripple effect on click
    input[type=checkbox]:not(:checked) + .checkbox-material .check:after {
      animation: rippleOff 700ms forwards ease-out;
    }
    input[type=checkbox]:checked + .checkbox-material .check:after {
      animation: rippleOn 700ms forwards ease-out;
    }

    // Style for disabled inputs
    input[type=checkbox][disabled]:not(:checked) ~ .checkbox-material .check:before,
    input[type=checkbox][disabled] + .circle {
      opacity: 0.5;
    }
    input[type=checkbox][disabled] + .checkbox-material .check:after {
      background-color: rgba(0,0,0,0.84);
      transform: rotate(-45deg);
    }

  }


  .coloured {
    .checkbox-material {
      .check {
        color: ${colors.main};
      }
      &:before{
        background-color: ${colors.main};
      }
    }
    input[type=checkbox]:checked + .checkbox-material {
      .check {
        color: ${colors.main};
      }
    }
    input[type=checkbox]:not(:checked) + .checkbox-material {
      
    }
  }


  @keyframes checkbox-on {
    0% {
      box-shadow:
        0 0 0 10px,
        10px -10px 0 10px,
        32px 0px 0 20px,
        0px 32px 0 20px,
        -5px 5px 0 10px,
        15px 2px 0 11px;
    }
    50% {
      box-shadow:
        0 0 0 10px,
        10px -10px 0 10px,
        32px 0px 0 20px,
        0px 32px 0 20px,
        -5px 5px 0 10px,
        20px 2px 0 11px;
    }
    100% {
      box-shadow:
        0 0 0 10px,
        10px -10px 0 10px,
        32px 0px 0 20px,
        0px 32px 0 20px,
        -5px 5px 0 10px,
        20px -12px 0 11px;
    }
  }
  @keyframes checkbox-off {
    0% {
      box-shadow:
        0 0 0 10px,
        10px -10px 0 10px,
        32px 0px 0 20px,
        0px 32px 0 20px,
        -5px 5px 0 10px,
        20px -12px 0 11px,
        0 0 0 0 inset;
    }

    25% {
      box-shadow:
        0 0 0 10px,
        10px -10px 0 10px,
        32px 0px 0 20px,
        0px 32px 0 20px,
        -5px 5px 0 10px,
        20px -12px 0 11px,
        0 0 0 0 inset;
    }
    50% {
      transform: rotate(45deg);
      margin-top: -4px;
      margin-left: 6px;
      width: 0px;
      height: 0px;
      box-shadow:
        0 0 0 10px,
        10px -10px 0 10px,
        32px 0px 0 20px,
        0px 32px 0 20px,
        -5px 5px 0 10px,
        15px 2px 0 11px,
        0 0 0 0 inset;
    }
    51% {
      transform: rotate(0deg);
      margin-top: -2px;
      margin-left: -2px;
      width: 20px;
      height: 20px;
      box-shadow:
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0px 0px 0 10px inset;
    }
    100% {
      transform: rotate(0deg);
      margin-top: -2px;
      margin-left: -2px;
      width: 20px;
      height: 20px;
      box-shadow:
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0px 0px 0 0px inset;
    }
  }
  @keyframes rippleOn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: scale(13,13);
    }
  }
  @keyframes rippleOff {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: scale(13,13);
    }
  }

  /* h1 {
    font-size: 2.2857142857142856rem;
    font-weight: 600;
  } */
`;
