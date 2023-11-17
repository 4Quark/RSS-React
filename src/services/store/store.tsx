import { combineReducers, createStore } from '@reduxjs/toolkit';
import { countReducer } from './countReducer';
import { valueReducer } from './valueReducer';
import { charactersReducer } from './charactersReducer';

const RootReducer = combineReducers({
  count: countReducer,
  value: valueReducer,
  characters: charactersReducer,
});

export const store = createStore(RootReducer);
