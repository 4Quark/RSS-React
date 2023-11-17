import { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  homeCounter: number;
}

const defaultState: IState = {
  homeCounter: 0,
};

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
