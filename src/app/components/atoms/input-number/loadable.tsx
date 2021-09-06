/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const InputNumber = lazyLoad(
  () => import('./index'),
  module => module.InputNumber,
);

export default InputNumber;
