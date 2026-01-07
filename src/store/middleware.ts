import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './index';

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (__DEV__) {
      console.log('Dispatching:', action);
      const result = next(action);
      console.log('Next state:', store.getState());
      return result;
    }
    return next(action);
  };

export const authMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    // Handle token refresh, logout on 401, etc.
    return next(action);
  };

