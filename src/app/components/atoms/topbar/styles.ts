import styled from 'styled-components';
import { colors, zIndexs } from 'styles/variables';

const Styles = styled.div`
  .topbar {
    position: fixed;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    border-bottom: 1px solid #7b7f9e30;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: ${zIndexs.topbar};
    background-color: ${colors.white100};
  }
  .topbar-filler {
    position: relative;
    height: 60px;
  }
`;

export default Styles;
