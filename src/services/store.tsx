import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import tilesReducer from './tilesReducer';
import countryReducer from './countryReducer';

const RootReducer = combineReducers({
  tiles: tilesReducer,
  country: countryReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: RootReducer });
};

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
