export const APP_CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  API_TIMEOUT: 30000,
  AUTH_TOKEN_KEY: 'auth_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  USER_KEY: 'user',
  DEFAULT_PAGE_SIZE: 20,
  TOAST_DURATION: 3000,
  MIN_PASSWORD_LENGTH: 8,
};

export const QUERY_KEYS = {
  BOOKS: 'books',
  STORIES: 'stories',
  EDITIONS: 'editions',
  USER: 'user',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Please log in to continue.',
  SERVER_ERROR: 'An error occurred on the server.',
};

export default APP_CONFIG;