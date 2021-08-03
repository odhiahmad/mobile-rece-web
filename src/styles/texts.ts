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
  .pre-line {
    white-space: pre-wrap;
  }
`;

export default TextStyles;
