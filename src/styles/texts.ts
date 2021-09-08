import styled, { createGlobalStyle } from 'styled-components';
import { colors, sizes } from './variables';

export const H1 = styled.h1`
  font-size: ${sizes.h1};
`;

export const H1Main = styled(H1)`
  color: ${colors.main};
  margin-bottom: 0.5rem;
`;

const TextStyles = createGlobalStyle`
  /* SIZE */
  .text-info-small {
    font-size: 0.72rem;
  }

  .text-info {
    font-size: 0.86rem;
  }

  .text-sub-title {
    font-size: 1.29rem;
  }

  .text-title {
    font-size: 1.43rem;
  }

  .text-jumbotron {
    font-size: 2.57rem;
  }

  .text-center {
    text-align: center;
  }

  .text-end {
    text-align: end;
  }

  /* COLOR */
  .color-black50 {
    color: ${colors.black50}
  }

  .bg-color-black50 {
    background-color: ${colors.black50};
  }

  .color-main {
    color: ${colors.main}
  }

  .bg-color-main {
    background-color: ${colors.main};
  }

  .color-white100 {
    color: ${colors.white100}
  }

  .bg-color-white100 {
    background-color: ${colors.white100};
  }

  /* WEIGHT */
  .text-thinner {
    font-weight: 200;
  }

  .text-thin {
    font-weight: 300;
  }

  .text-bold {
    font-weight: 700;
  }

  .text-heavy {
    font-weight: 900;
  }

  /* OTHER */
  .pre-line {
    white-space: pre-wrap;
  }

  .ellipsis-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .pointer {
    cursor: pointer;
  }
`;

export default TextStyles;
