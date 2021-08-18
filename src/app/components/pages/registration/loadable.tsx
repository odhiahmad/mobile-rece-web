/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageRegistration = lazyLoad(
  () => import('./index'),
  module => module.PageRegistration,
);

export default PageRegistration;
