/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageInvest = lazyLoad(
  () => import('./index'),
  module => module.PageInvest,
);

export default PageInvest;
