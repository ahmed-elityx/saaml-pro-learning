export const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://api.production.com';

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
  THEME: '@theme',
  LANGUAGE: '@language',
};

export const APP_CONFIG = {
  APP_NAME: 'SaamlPro',
  VERSION: '1.0.0',
  TIMEOUT: 30000,
};

