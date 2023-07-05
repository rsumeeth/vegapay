import { configureStore } from '@reduxjs/toolkit';
import KitSliceReducer from './KitSlice';

export const store = configureStore({
  reducer: {
    kitSlice : KitSliceReducer,
  },
})