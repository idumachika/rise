import {useQuery} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {baseURL, instance} from '../requests';

export type Response = {
  quote: string;
  author: string;
};

export const getQuotes = async (): Promise<AxiosResponse<Response>> => {
  return await instance.get(`${baseURL}/quotes`);
};

export const useGetQuote = () => {
  return useQuery({
    queryKey: ['quotes'],
    queryFn: getQuotes,
    onError: error => {
      if (error instanceof AxiosError) {
        console.error(error.response?.data.message);
      }
    },
    select: data => data.data,
  });
};
