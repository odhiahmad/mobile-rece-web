/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const BottomBar = lazyLoad(
  () => import('./index'),
  module => module.BottomBar,
);

export default BottomBar;
