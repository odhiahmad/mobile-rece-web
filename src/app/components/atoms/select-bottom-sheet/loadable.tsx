/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const SelectBottomSheet = lazyLoad(
  () => import('./index'),
  module => module.SelectBottomSheet,
);

export default SelectBottomSheet;
