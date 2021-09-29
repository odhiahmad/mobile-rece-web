import PageHome from 'app/components/pages/home/loadable';
import PageSaving from 'app/components/pages/saving/loadable';
import PageWithdraw from 'app/components/pages/withdraw/loadable';
import {
  PageProfile,
  PageUbahProfile,
} from 'app/components/pages/profile/loadable';
import PageTransfer from 'app/components/pages/transfer/loadable';
import PageInvest from 'app/components/pages/invest/loadable';
import PageBill from 'app/components/pages/bill/loadable';
import PageKyc from 'app/components/pages/kyc/loadable';

const routes = [
  {
    key: 'page-home',
    name: 'page-home',
    component: PageHome,
    path: '/',
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
  {
    key: 'page-ubah-profile',
    name: 'page-ubah-profile',
    component: PageUbahProfile,
    path: '/profile-ubah',
  },
  {
    key: 'page-transfer',
    name: 'page-transfer',
    component: PageTransfer,
    path: '/transfer',
  },
  {
    key: 'page-invest',
    name: 'page-invest',
    component: PageInvest,
    path: '/invest',
  },
  {
    key: 'page-bill-payment',
    name: 'page-bill-payment',
    component: PageBill,
    path: '/bill-payment',
  },
  {
    key: 'page-kyc',
    name: 'page-kyc',
    component: PageKyc,
    path: '/kyc',
  },
];

export default routes;
