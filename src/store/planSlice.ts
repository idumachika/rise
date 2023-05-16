import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export type PlanInput = {
  plan_name: string;
  target_amount: string;
  maturity_date: string;
};

const initialState: PlanInput = {
  plan_name: '',
  target_amount: '',
  maturity_date: '',
};

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    createPlans: (state, action: PayloadAction<PlanInput>) => {
      state.maturity_date = action.payload.maturity_date;
      state.plan_name = action.payload.plan_name;
      state.target_amount = action.payload.target_amount;
    },
  },
});

export const {createPlans} = planSlice.actions;
export default planSlice.reducer;
