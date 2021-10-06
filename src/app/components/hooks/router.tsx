// import * as React from 'react';
import { useHistory } from 'react-router-dom';

const route = {
  home: '/',
  register: '/register',
  transfer: '/transfer',
  withdraw: '/withdraw',
  invest: '/invest',
  bill: '/bill-payment',
  profile: '/profile',
  saving: '/saving',
};

type PropsRouter = {
  pathname: string;
  search?: string;
  state?: Object;
};

const useRouter = () => {
  const history = useHistory();
  const backAgain = () => history.goBack();
  // PUSH
  const push = (prop: PropsRouter) => {
    history.push(prop);
  };
  // REPLACE
  return {
    push,
    route,
    backAgain,
  };
};

export default useRouter;
