/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageLogin = lazyLoad(
  () => import('./index'),
  module => module.PageLogin,
);

export default PageLogin;
