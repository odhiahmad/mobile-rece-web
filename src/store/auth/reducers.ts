import * as types from './constants';

const initialState = {
  isLoggedin: false,
};

type Action = any;

export default function reducer(state = initialState, actions: Action) {
  switch (actions.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedin: true,
      };
    default:
      return state;
  }
}
