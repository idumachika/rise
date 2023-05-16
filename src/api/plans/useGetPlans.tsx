import {useQuery} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {baseURL, instance} from '../requests';

export type Response = {
  item_count: number;
  items: Item[];
};

export type Item = {
  id: string;
  created_at: string;
  plan_name: string;
  invested_amount: number;
  total_returns: number;
  target_amount: number;
  maturity_date: string;
  user_id: string;
};

export const getPlans = async (): Promise<AxiosResponse<Response>> => {
  return await instance.get(`${baseURL}/plans`);
};

export const useGetPlans = () => {
  return useQuery({
    queryKey: ['plans'],
    queryFn: getPlans,
    onError: error => {
      if (error instanceof AxiosError) {
        console.error(error.response?.data.message);
      }
    },
    select: data => data.data,
  });
};
