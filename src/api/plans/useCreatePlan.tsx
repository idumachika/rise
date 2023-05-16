import {useMutation} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {PlanInput} from '../../store/planSlice';
import {baseURL, instance} from '../requests';

export type Response = {
  id: string;
  created_at: string;
  plan_name: string;
  invested_amount: number;
  total_returns: number;
  target_amount: number;
  maturity_date: string;
  user_id: string;
  returns: any[];
};

export const createPlan = async (
  user: PlanInput,
): Promise<AxiosResponse<Response>> => {
  return await instance.post(`${baseURL}/plans`, user);
};

export const useCreatePlan = () => {
  return useMutation<AxiosResponse<Response>, AxiosError<any>, PlanInput>({
    mutationFn: (data: PlanInput) => createPlan(data),
  });
};
