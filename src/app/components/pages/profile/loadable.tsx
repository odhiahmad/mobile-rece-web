/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageProfile = lazyLoad(
  () => import('./index'),
  module => module.PageProfile,
);

export default PageProfile;
