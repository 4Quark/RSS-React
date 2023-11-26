import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pagesReducer from './paginationReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const RootReducer = combineReducers({
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
