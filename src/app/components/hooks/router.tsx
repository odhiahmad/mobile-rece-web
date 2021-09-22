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

const useRouter = () => {
  const history = useHistory();
  // PUSH
  const push = (pathname: string) => {
    history.push({
      pathname,
    });
  };
  // REPLACE
  return {
    push,
    route,
  };
};

export default useRouter;
