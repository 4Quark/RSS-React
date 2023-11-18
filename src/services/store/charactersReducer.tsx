import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter, ICharacterState } from '../types';

const defaultState: ICharacterState = {
  characters: [],
  isLoading: false,
  error: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: defaultState,
  reducers: {
    charactersFetching(state) {
      state.isLoading = true;
    },
    charactersFetchingSuccess(state, action: PayloadAction<ICharacter[]>) {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload;
    },
    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.characters = [];
    },
  },
});

export default charactersSlice.reducer;
