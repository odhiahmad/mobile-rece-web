import React from 'react';

export type INode =
  | React.ReactChild
  | React.ReactChild[]
  | Element
  | Element[]
  | string
  | null;
