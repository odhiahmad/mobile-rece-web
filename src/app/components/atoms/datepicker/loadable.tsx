/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

const DatePickerComponent = lazyLoad(
  () => import('./index'),
  module => module.DatePickerComponent,
);

export default DatePickerComponent;
