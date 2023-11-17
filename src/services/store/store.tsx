import { combineReducers, createStore } from '@reduxjs/toolkit';
import { countReducer } from './countReducer';
import { valueReducer } from './valueReducer';

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof RootReducer>;

const RootReducer = combineReducers({
  count: countReducer,
  value: valueReducer,
});

export const store = createStore(RootReducer);
