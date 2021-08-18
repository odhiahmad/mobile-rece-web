import { createGlobalStyle } from 'styled-components';
import { sizes } from './variables';

const PaddingStyles = createGlobalStyle`
  .pl-24 {
    padding-left: ${sizes.bodyPadding};
  }
  .pr-24 {
    padding-right: ${sizes.bodyPadding};
  }
  .pt-24 {
    padding-top: ${sizes.bodyPadding};
  }
  .pb-24 {
    padding-bottom: ${sizes.bodyPadding};
  }

  .pt-1 {
    padding-top: 1rem;
  }
  .pt-2 {
    padding-top: 2rem;
  }
  .pt-3 {
    padding-top: 3rem;
  }

  .pb-1 {
    padding-bottom: 1rem;
  }
  .pb-2 {
    padding-bottom: 2rem;
  }
  .pb-3 {
    padding-bottom: 3rem;
  }

  .pl-1 {
    padding-left: 1rem;
  }
  .pl-2 {
    padding-left: 2rem;
  }
  .pl-3 {
    padding-left: 3rem;
  }

  .pr-1 {
    padding-right: 1rem;
  }
  .pr-2 {
    padding-right: 2rem;
  }
  .pr-3 {
    padding-right: 3rem;
  }

  .mb-1 {
    margin-bottom: 1rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mb-3 {
    margin-bottom: 3rem;
  }
`;

export default PaddingStyles;
