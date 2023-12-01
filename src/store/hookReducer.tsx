import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IData, IForm } from '../types';

const defaultState: IForm = {
  data: null,
};

export const hookSlice = createSlice({
  name: 'tiles',
  initialState: defaultState,
  reducers: {
    hookSubmit(state, action: PayloadAction<IData>) {
      state.data = action.payload;
    },
  },
});

export default hookSlice.reducer;
