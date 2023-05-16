import {useMutation} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {baseURL, instance} from '../requests';

export type AuthResponse = {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email_address: string;
  username: any;
  phone_number: any;
  date_of_birth: string;
};

export type RegisterInput = {
  email_address: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  phone_number?: string;
  username?: string;
};

export const register = async (
  user: RegisterInput,
): Promise<AxiosResponse<AuthResponse>> => {
  return await instance.post(`${baseURL}/users`, user);
};

export const useRegister = () => {
  return useMutation<
    AxiosResponse<AuthResponse>,
    AxiosError<any>,
    RegisterInput
  >({
    mutationFn: (data: RegisterInput) => register(data),
  });
};
