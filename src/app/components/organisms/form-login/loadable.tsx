/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const FormLogin = lazyLoad(
  () => import('./index'),
  module => module.FormLogin,
);

export default FormLogin;
