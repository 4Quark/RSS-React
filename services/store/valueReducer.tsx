import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IValueState } from '../types';

const defaultState: IValueState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: defaultState,
  reducers: {
    updateSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
