import { combineReducers, configureStore } from '@reduxjs/toolkit';
import valueReducer from './valueReducer';
import charactersReducer from './charactersReducer';
import singleReducer from './singleReducer';
import pagesReducer from './paginationReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const RootReducer = combineReducers({
  value: valueReducer,
  characters: charactersReducer,
  single: singleReducer,
  pages: pagesReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: RootReducer });
};

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
