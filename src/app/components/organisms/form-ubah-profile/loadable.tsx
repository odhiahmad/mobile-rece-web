/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const FormUbahProfile = lazyLoad(
  () => import('./index'),
  module => module.FormUbahProfile,
);

export default FormUbahProfile;
