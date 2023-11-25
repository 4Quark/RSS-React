import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IValueState } from '../types';
// localStorage.getItem('searchInput');

const defaultState: IValueState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: defaultState,
  reducers: {
    updateSearch(state, action: PayloadAction<string>) {
      // localStorage.setItem('searchInput', action.payload);
      state.searchValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
