import { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  searchValue: string;
}

const defaultState: IState = {
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
