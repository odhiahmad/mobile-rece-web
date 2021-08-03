import styled from 'styled-components';
import { colors } from 'styles/variables';
import { PropTypes as ButtonPropTypes } from './index';

type fullWidth = ButtonPropTypes['fullWidth'];
type buttonType = ButtonPropTypes['buttonType'];

interface PropTypes {
  fullWidth?: fullWidth;
  buttonType: buttonType;
}

const colorScheme = (type: buttonType) => {
  if (type === 'main') {
    return `
      border-width: 0px;
      background-color: ${colors.main};
      color: ${colors.white100};
      font-weight: 600;
    `;
  }
  return `
    border-width: 1px;
    background-color: ${colors.white100};
    color: ${colors.black50};
    font-weight: 600;
  `;
};

const ButtonStyles = styled.button<PropTypes>`
  height: 3.5rem;
  outline: none;
  border-width: 1px;
  border-radius: 0.7rem;
  font-size: 1rem;
  outline: none;
  ${props => props.fullWidth && 'width: 100%;'}
  ${props => colorScheme(props.buttonType)}
`;

export default ButtonStyles;
