import * as types from './constants';

export interface IAction<T> {
  type: string;
  payload: T;
}

export function toggleSidebar() {
  return {
    type: types.SIDEBAR_VISIBILITY_TOGGLE,
  };
}

export function openSnackbar(payload: any): IAction<any> {
  return {
    type: types.SNACKBAR_TOGGLE,
    payload,
  };
}

export function toggleModal(payload: any): IAction<any> {
  return {
    type: types.MODAL_TOGGLE,
    payload,
  };
}
