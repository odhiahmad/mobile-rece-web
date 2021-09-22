import styled from 'styled-components';

const windowWidth = window.innerWidth;

console.log(windowWidth);

const Styles = styled.div`
  .bottombar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.09);
  }
  .bottombar_saving {
    position: absolute;
    padding: 12px 32px;
    border-radius: 42px;
    top: -16px;
    left: calc(${windowWidth / 2}px - 80px);
  }
`;

export default Styles;
