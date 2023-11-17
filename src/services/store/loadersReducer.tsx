import { PayloadAction } from '@reduxjs/toolkit';
import { ILoaderState } from '../types';

const defaultState: ILoaderState = {
  mainLoader: false,
  extraLoader: false,
};

export const startMainLoader = () => ({ type: 'START_MAIN' });
export const stopMainLoader = () => ({ type: 'STOP_MAIN' });
export const startExtraLoader = () => ({ type: 'START_EXTRA' });
export const stopExtraLoader = () => ({ type: 'STOP_EXTRA' });

export const loadersReducer = (
  state = defaultState,
  action: PayloadAction<ILoaderState>
) => {
  switch (action.type) {
    case 'START_MAIN':
      return { ...state, mainLoader: true };
    case 'STOP_MAIN':
      return { ...state, mainLoader: false };
    case 'START_EXTRA':
      return { ...state, extraLoader: true };
    case 'STOP_EXTRA':
      return { ...state, extraLoader: false };
    default:
      return state;
  }
};
