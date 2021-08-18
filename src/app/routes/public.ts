import PageLogin from 'app/components/pages/login/loadable';
import PageRegistration from 'app/components/pages/registration/loadable';

const routes = [
  {
    key: 'page-login',
    name: 'page-login',
    component: PageLogin,
    path: '/',
  },
  {
    key: 'page-register',
    name: 'page-register',
    component: PageRegistration,
    path: '/register',
  },
];

export default routes;
