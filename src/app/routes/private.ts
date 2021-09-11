import PageHome from 'app/components/pages/home/loadable';
import PageSaving from 'app/components/pages/saving/loadable';
import PageWithdraw from 'app/components/pages/withdraw/loadable';
import PageProfile from 'app/components/pages/profile/loadable';

const routes = [
  {
    key: 'page-home',
    name: 'page-home',
    component: PageHome,
    path: '/home',
  },
  {
    key: 'page-saving',
    name: 'page-saving',
    component: PageSaving,
    path: '/saving',
  },
  {
    key: 'page-withdraw',
    name: 'page-withdraw',
    component: PageWithdraw,
    path: '/withdraw',
  },
  {
    key: 'page-profile',
    name: 'page-profile',
    component: PageProfile,
    path: '/profile',
  },
];

export default routes;
