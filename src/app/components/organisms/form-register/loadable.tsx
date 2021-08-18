/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const FormRegister = lazyLoad(
  () => import('./index'),
  module => module.FormRegister,
);

export default FormRegister;
