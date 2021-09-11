/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageWithdraw = lazyLoad(
  () => import('./index'),
  module => module.PageWithdraw,
);

export default PageWithdraw;
