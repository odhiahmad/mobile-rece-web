/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageOtp = lazyLoad(
  () => import('./index'),
  module => module.PageOtp,
);

export default PageOtp;
