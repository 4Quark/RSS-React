import { PayloadAction } from '@reduxjs/toolkit';
import { ICounterState } from '../types';

const defaultState: ICounterState = {
  homeCounter: 0,
};

export const decrement = () => ({ type: 'LESS_COUNTS' });
export const increment = () => ({ type: 'MORE_COUNTS' });

export const countReducer = (
  state = defaultState,
  action: PayloadAction<{ homeCounter: number }>
) => {
  switch (action.type) {
    case 'MORE_COUNTS':
      return { ...state, homeCounter: state.homeCounter + 1 };
    case 'LESS_COUNTS':
      return { ...state, homeCounter: state.homeCounter - 1 };
    default:
      return state;
  }
};
