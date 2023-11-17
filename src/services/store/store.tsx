import { combineReducers, createStore } from '@reduxjs/toolkit';
import { countReducer } from './countReducer';
import { valueReducer } from './valueReducer';
import { charactersReducer } from './charactersReducer';
import { loadersReducer } from './loadersReducer';

const RootReducer = combineReducers({
  count: countReducer,
  value: valueReducer,
  characters: charactersReducer,
  loaders: loadersReducer,
});

export const store = createStore(RootReducer);
