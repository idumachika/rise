import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {baseURL, instance} from '../requests';

export type LoginResponse = {
  id: string;
  email_address: string;
  first_name: string;
  last_name: string;
  username: any;
  total_balance: number;
  total_returns: number;
  token: string;
};

export type LoginInput = {
  email_address: string;
  password: string;
};

export const login = async (
  user: LoginInput,
): Promise<AxiosResponse<LoginResponse>> => {
  return await instance.post(`${baseURL}/sessions`, user);
};

export const useLogin = () => {
  return useMutation<AxiosResponse<LoginResponse>, AxiosError<any>, LoginInput>(
    {
      mutationFn: (data: LoginInput) => login(data),
      onSuccess: ({data}) => {
        AsyncStorage.setItem('token', data.token);
      },
    },
  );
};
