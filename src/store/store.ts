import {configureStore} from '@reduxjs/toolkit';
// import registerReducer from './registerSlice';
import planReducer from './planSlice';

export const store = configureStore({
  reducer: {
    plan: planReducer,
  },
});
console.log("store",store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
