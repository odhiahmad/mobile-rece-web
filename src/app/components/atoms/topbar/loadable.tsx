/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const TopBar = lazyLoad(
  () => import('./index'),
  module => module.TopBar,
);

export default TopBar;
