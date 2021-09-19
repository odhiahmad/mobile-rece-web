import PageLogin from 'app/components/pages/login/loadable';
import PageRegistration from 'app/components/pages/registration/loadable';
import PageOtp from 'app/components/pages/otp/loadable';

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
  {
    key: 'page-otp',
    name: 'page-otp',
    component: PageOtp,
    path: '/otp',
  },
];

export default routes;
