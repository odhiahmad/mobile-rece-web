import * as types from './constants';

export interface IAction<T> {
  type: string;
  payload: T;
}

export function login() {
  return {
    type: types.LOGIN,
  };
}
