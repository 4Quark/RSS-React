import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter, ISingleState } from '../types';

const defaultState: ISingleState = {
  character: null,
  isLoading: false,
  error: '',
};

export const singleSlice = createSlice({
  name: 'characters',
  initialState: defaultState,
  reducers: {
    singleFetching(state) {
      state.isLoading = true;
    },
    singleFetchingSuccess(state, action: PayloadAction<ICharacter>) {
      state.isLoading = false;
      state.error = '';
      state.character = action.payload;
    },
    singleFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.character = null;
    },
  },
});

export default singleSlice.reducer;
