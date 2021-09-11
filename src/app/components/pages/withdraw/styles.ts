import styled from 'styled-components';
import { colors } from 'styles/variables';

const Styles = styled.div`
  .withdraw_option {
    border: 0.4px solid ${colors.main};
    border-radius: 8px;
    &.selected {
      border-width: 2px;
    }
  }
`;

export default Styles;
