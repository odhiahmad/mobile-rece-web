/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageHome = lazyLoad(
  () => import('./index'),
  module => module.PageHome,
);

export default PageHome;
