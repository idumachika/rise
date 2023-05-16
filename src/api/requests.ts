import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosError} from 'axios';
import {navigationRef} from '../../App';

export const baseURL =
  'https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1';

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// intercepts private requests and add token to header
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

// intercepts private response and check if token has expired
instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log('error', error);
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        await AsyncStorage.removeItem('token');
        navigationRef.current?.navigate('Login');
      }

      throw error;
    }
  },
);
