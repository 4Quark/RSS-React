import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IData, IForm } from '../types';

const defaultState: IForm = {
  data: null,
};

export const uncontrolledSlice = createSlice({
  name: 'tiles',
  initialState: defaultState,
  reducers: {
    uncontrollSubmit(state, action: PayloadAction<IData>) {
      state.data = action.payload;
    },
  },
});

export default uncontrolledSlice.reducer;
