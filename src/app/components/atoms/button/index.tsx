import * as React from 'react';
import ButtonStyles from './styles';
import { INode } from 'types/common';

export interface PropTypes {
  id: string;
  children?: INode;
  type?: 'button' | 'submit';
  buttonType?: 'main' | 'no-bg';
  onClick?: () => any;
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  children = '',
  onClick = () => {},
  fullWidth = false,
  buttonType = 'main',
  className = '',
  type = 'button',
  id = '',
}: PropTypes) {
  return (
    <>
      <ButtonStyles
        id={id}
        type={type}
        className={className}
        buttonType={buttonType}
        onClick={onClick}
        fullWidth={fullWidth}
      >
        {children}
      </ButtonStyles>
    </>
  );
}
