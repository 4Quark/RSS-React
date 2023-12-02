import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITile, ITilesState } from '../services/types';

const defaultState: ITilesState = {
  tiles: [],
  lastTile: null,
};

export const tilesSlice = createSlice({
  name: 'tiles',
  initialState: defaultState,
  reducers: {
    pushTile(state, action: PayloadAction<ITile>) {
      state.tiles = [...state.tiles, action.payload];
    },
    charactersFetchingError(state, action: PayloadAction<ITile>) {
      state.lastTile = action.payload;
    },
  },
});

export default tilesSlice.reducer;
