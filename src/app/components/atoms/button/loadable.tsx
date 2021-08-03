/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const Button = lazyLoad(
  () => import('./index'),
  module => module.Button,
);

export default Button;
