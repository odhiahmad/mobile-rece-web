import PageHome from 'app/components/pages/home/loadable';
import PageSaving from 'app/components/pages/saving/loadable';

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
];

export default routes;
