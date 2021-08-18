// import * as React from 'react';
import { useHistory } from 'react-router-dom';

const route = {
  home: '/',
  register: '/register',
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
