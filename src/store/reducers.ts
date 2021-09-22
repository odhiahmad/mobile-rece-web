/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';
import app from 'store/app/reducers';
import auth from 'store/auth/reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  // const globalReducers = {
  //   app,
  // };
  // if (Object.keys(injectedReducers).length === 0) {
  //   return state => state;
  // } else {
  //   return combineReducers({
  //     ...injectedReducers,
  //   });
  // }
  return combineReducers({
    app,
    auth,
    ...injectedReducers,
  });
}
