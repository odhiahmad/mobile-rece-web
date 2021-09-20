/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageKyc = lazyLoad(
  () => import('./index'),
  module => module.PageKyc,
);

export default PageKyc;
