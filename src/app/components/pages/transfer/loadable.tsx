/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageTransfer = lazyLoad(
  () => import('./index'),
  module => module.PageTransfer,
);

export default PageTransfer;
