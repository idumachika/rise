import {useQuery} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {baseURL, instance} from '../requests';
import {Item} from './useGetPlans';

export const getCamapign = async (id: string): Promise<AxiosResponse<Item>> => {
  return await instance.get(`${baseURL}/plans/${id}`);
};

export const useGetPlan = (id: string) => {
  return useQuery({
    queryKey: ['plan', id],
    queryFn: () => getCamapign(id),
    onError: error => {
      if (error instanceof AxiosError) {
        console.error(error.response?.data.message);
      }
    },
    select: data => data.data,
  });
};
