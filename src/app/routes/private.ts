import PageHome from 'app/components/pages/home/loadable';
import PageSaving from 'app/components/pages/saving/loadable';
import PageWithdraw from 'app/components/pages/withdraw/loadable';

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
];

export default routes;
