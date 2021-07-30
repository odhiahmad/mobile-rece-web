import * as types from './constants';

const initialState = {
  isMaintenance: false,
  sidebar: {
    open: false,
  },
  snackbar: {
    type: 'success',
    open: false,
    message: '',
  },
  modal: {
    open: false,
    component: null,
    header: '',
    hasHeader: true,
  },
};

type Action = any;

export default function reducer(state = initialState, actions: Action) {
  switch (actions.type) {
    case types.SIDEBAR_VISIBILITY_TOGGLE:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          open: !state.sidebar.open,
        },
      };
    case types.SNACKBAR_TOGGLE:
      return {
        ...state,
        snackbar: {
          type: actions.payload.type,
          open: !state.snackbar.open,
          message: actions.payload.message,
        },
      };
    case types.MODAL_TOGGLE:
      return {
        ...state,
        modal: {
          open: actions.payload.open,
          component: actions.payload.component,
          header: actions.payload.header ? actions.payload.header : '',
          size: actions.payload.size,
          hasHeader:
            actions.payload.hasHeader !== undefined
              ? actions.payload.hasHeader
              : false,
        },
      };
    default:
      return state;
  }
}
