/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const Input = lazyLoad(
  () => import('./index'),
  module => module.Input,
);

export default Input;
