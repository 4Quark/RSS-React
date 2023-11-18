import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPaginationState } from '../types';

const defaultState: IPaginationState = {
  totalPages: 1,
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: defaultState,
  reducers: {
    updateTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export default pagesSlice.reducer;
