import { PayloadAction, createStore } from '@reduxjs/toolkit';

interface IState {
  homeCounter: number;
}

export type RootState = ReturnType<typeof store.getState>;

const defaultState: IState = {
  homeCounter: 0,
};

const reducer = (
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

export const store = createStore(reducer);
