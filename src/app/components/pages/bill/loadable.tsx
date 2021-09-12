/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageBill = lazyLoad(
  () => import('./index'),
  module => module.PageBill,
);

export default PageBill;
