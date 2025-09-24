import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from './incomeSlice';
import outcomeReducer from './outcomeSlice';
import debtReducer from './debtSlice';
import assetReducer from './assetSlice';

export const store = configureStore({
  reducer: {
    'income': incomeReducer,
    'outcome': outcomeReducer,
    'asset': assetReducer,
    'debt': debtReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;