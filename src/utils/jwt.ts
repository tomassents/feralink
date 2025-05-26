import { jwtDecode } from 'jwt-decode';
import axios from './axios';
import config from '@/config';

export const isValidToken = (token: string | null): boolean => {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode<{ exp: number }>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch {
    return false;
  }
};

export const setSession = (token: string | null) => {
  if (token) {
    window.localStorage.setItem(config.auth.tokenKey, token);
    axios.defaults.headers.common.Authorization = `${config.auth.tokenPrefix} ${token}`;
  } else {
    window.localStorage.removeItem(config.auth.tokenKey);
    delete axios.defaults.headers.common.Authorization;
  }
};

export const getToken = (): string | null => {
  return window.localStorage.getItem(config.auth.tokenKey);
};
