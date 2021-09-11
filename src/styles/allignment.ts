import { createGlobalStyle } from 'styled-components';

const AllignmentStyles = createGlobalStyle`
  .w-46 {
    width: 46%;
  }

  .w-50 {
    width: 50%;
  }

  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .flex {
    display: flex;
  }

  .flex-full {
    flex: 1;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-v-center {
    align-items: center;
  }

  .flex-h-center {
    justify-content: center;
  }

  .flex-h-space {
    justify-content: space-between;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .relative {
    position: relative;
  }

  .overflow-y-scroll {
    overflow-y: scroll;
  }

  .border-box {
    box-sizing: border-box;
  }
`;

export default AllignmentStyles;
