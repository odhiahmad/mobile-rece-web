/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const PageProfile = lazyLoad(
  () => import('./index'),
  module => module.PageProfile,
);

export const PageUbahProfile = lazyLoad(
  () => import('./ubahProfil'),
  module => module.PageUbahProfile,
);
