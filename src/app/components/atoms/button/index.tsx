import * as React from 'react';
import ButtonStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { INode } from 'types/common';

export interface PropTypes {
  id: string;
  children?: INode;
  type?: 'button' | 'submit';
  buttonType?: 'main' | 'no-bg';
  onClick?: () => any;
  fullWidth?: boolean;
  className?: string;
  loading?: boolean;
}

export function Button({
  children = '',
  onClick = () => {},
  fullWidth = false,
  buttonType = 'main',
  className = '',
  type = 'button',
  id = '',
  loading = false,
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
        {loading ? (
          <CircularProgress color="inherit" size={30} />
        ) : (
          // prettier-ignore
          children
        )}
      </ButtonStyles>
    </>
  );
}
