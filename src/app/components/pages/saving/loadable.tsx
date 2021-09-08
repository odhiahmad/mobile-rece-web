/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const PageSaving = lazyLoad(
  () => import('./index'),
  module => module.PageSaving,
);

export default PageSaving;
