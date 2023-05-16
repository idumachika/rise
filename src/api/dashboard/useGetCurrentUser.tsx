import {useQuery} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {baseURL, instance} from '../requests';

export type Response = {
  id: string;
  email_address: string;
  first_name: string;
  last_name: string;
  username: any;
  iat: number;
  exp: number;
  total_balance: number;
  total_returns: number;
};

export const getCurrentUser = async (): Promise<AxiosResponse<Response>> => {
  return await instance.get(`${baseURL}/sessions`);
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['current-user'],
    queryFn: getCurrentUser,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: 1,
    onError: error => {
      if (error instanceof AxiosError) {
        console.error(error.response?.data.message);
      }
    },
    select: data => data.data,
  });
};
