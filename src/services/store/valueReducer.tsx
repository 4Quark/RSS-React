import { PayloadAction } from '@reduxjs/toolkit';
import { IValueState } from '../types';

const defaultState: IValueState = {
  searchValue: '',
};

export const updateSearch = (payload: string) => ({
  type: 'NEW_VALUE',
  payload,
});

export const valueReducer = (
  state = defaultState,
  action: PayloadAction<{ searchValue: string }>
) => {
  switch (action.type) {
    case 'NEW_VALUE':
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
