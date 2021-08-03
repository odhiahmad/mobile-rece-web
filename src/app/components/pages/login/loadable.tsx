/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const LoginPage = lazyLoad(
  () => import('./index'),
  module => module.LoginPage,
);

export default LoginPage;
