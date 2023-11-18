import { createSlice } from '@reduxjs/toolkit';
import { ICounterState } from '../types';

const defaultState: ICounterState = {
  homeCounter: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState: defaultState,
  reducers: {
    increment(state) {
      state.homeCounter += 1;
    },
    decrement(state) {
      state.homeCounter -= 1;
    },
  },
});

export default countSlice.reducer;
