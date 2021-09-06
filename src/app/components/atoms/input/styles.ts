import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';

import { colors } from 'styles/variables';
import { PropTypes as InputPropTypes } from './index';

interface PropTypes {
  bgColorScheme: InputPropTypes['colorScheme'];
  hasLogo: boolean;
  type: InputPropTypes['type'];
}

const flashAnimation = keyframes`${flash}`;

const padding = (
  hasLogo: PropTypes['hasLogo'],
  type: PropTypes['type'],
): string => {
  if (hasLogo && type === 'password') {
    return '0rem 3.5rem 0rem 4.5rem';
  } else if (hasLogo && (type === 'text' || type === 'number')) {
    return '0rem 1rem 0rem 4.5rem';
  }
  if (type === 'password') {
    return '0rem 3.5rem 0rem 1rem';
  }
  return '0rem 1rem';
};

const InputStyles = styled.div<PropTypes>`
  position: relative;
  margin-bottom: 1.7rem;
  input,
  .input-number {
    width: 100%;
    border-width: 1px;
    border-radius: 0.5rem;
    font-size: 1rem;
    outline: none;
    height: 3.5rem;
    box-sizing: border-box;
    /* color: transparent; */
    /* text-shadow: 0 0 0 ${colors.black50}; */
    color: ${colors.black50};
    padding: ${props => padding(props.hasLogo, props.type)};
    border-style: ${props =>
      props.bgColorScheme === 'normal' ? 'solid' : 'hidden'};
    background-color: ${props =>
      props.bgColorScheme === 'normal' ? colors.white100 : colors.black10};
    border-color: ${props =>
      props.bgColorScheme === 'normal' ? colors.main : 'none'};

    &:focus + .input_label-normal {
      transform: translateY(-25px) translateX(-9px) scale(0.85);
      padding: 0px 5px;
      color: ${colors.main};
    }
    &:not(:placeholder-shown) + .input_label-normal {
      transform: translateY(-25px) translateX(-9px) scale(0.85);
      padding: 0px 5px;
      color: ${colors.main};
    }
  }
  .input_logo {
    position: absolute;
    left: 1rem;
    top: 1rem;
    padding-right: 1rem;
    border-right: 1px solid ${colors.black30};
    width: 2.5rem;
  }
  button {
    background-color: transparent;
    outline: none;
    border: none;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  .input_error-msg {
    font-size: 0.8rem;
    font-weight: 600;
    color: red;
    position: absolute;
    left: 1rem;
    bottom: -1.2rem;
    animation: 1s ${flashAnimation};
    width: calc(100% - 1rem);
  }
  .input_label-normal {
    position: absolute;
    left: 1rem;
    top: 1rem;
    background-color: white;
    transition: 0.1s ease-out;
    color: #dadada;
  }
`;

export default InputStyles;
