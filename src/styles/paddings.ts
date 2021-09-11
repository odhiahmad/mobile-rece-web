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

  .pt-half {
    padding-top: 0.5rem;
  }
  .pt-1 {
    padding-top: 1rem;
  }
  .pt-1-half {
    padding-top: 1.5rem;
  }
  .pt-2 {
    padding-top: 2rem;
  }
  .pt-2-half {
    padding-top: 2.5rem;
  }
  .pt-3 {
    padding-top: 3rem;
  }

  .pb-half {
    padding-bottom: 0.5rem;
  }
  .pb-1 {
    padding-bottom: 1rem;
  }
  .pb-1-half {
    padding-bottom: 1.5rem;
  }
  .pb-2 {
    padding-bottom: 2rem;
  }
  .pb-2-half {
    padding-bottom: 2.5rem;
  }
  .pb-3 {
    padding-bottom: 3rem;
  }

  .pl-1 {
    padding-left: 1rem;
  }
  .pl-1-half {
    padding-left: 1.5rem;
  }
  .pl-2 {
    padding-left: 2rem;
  }
  .pl-2-half {
    padding-left: 2.5rem;
  }
  .pl-3 {
    padding-left: 3rem;
  }

  .pr-1 {
    padding-right: 1rem;
  }
  .pr-1-half {
    padding-right: 1.5rem;
  }
  .pr-2 {
    padding-right: 2rem;
  }
  .pr-2-half {
    padding-right: 2.5rem;
  }
  .pr-3 {
    padding-right: 3rem;
  }

  .mt-half {
    margin-top: 0.5rem;
  }
  .mt-1 {
    margin-top: 1rem;
  }
  .mt-1-half {
    margin-top: 1.5rem;
  }
  .mt-2 {
    margin-top: 2rem;
  }
  .mt-2-half {
    margin-top: 2.5rem;
  }
  .mt-3 {
    margin-top: 3rem;
  }

  .mb-half {
    margin-bottom: 0.5rem;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }
  .mb-1-half {
    margin-bottom: 1.5rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mb-2-half {
    margin-bottom: 2.5rem;
  }
  .mb-3 {
    margin-bottom: 3rem;
  }

  .mr-half {
    margin-right: 0.5rem;
  }
  .mr-1 {
    margin-right: 1rem;
  }
  .mr-1-half {
    margin-right: 1.5rem;
  }
  .mr-2 {
    margin-right: 2rem;
  }
  .mr-2-half {
    margin-right: 2.5rem;
  }
  .mr-3 {
    margin-right: 3rem;
  }

  /* OTHER */
  .border-radius-main {
    border-radius: 10px;
  }

  .border-radius-big {
    border-radius: 20px;
  }

  .main-border-bottom {
    border-bottom: 1px solid #7b7f9e30;
  }
`;

export default PaddingStyles;
