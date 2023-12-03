import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICountryState } from './types';
import { countries } from './countries';

const defaultState: ICountryState = {
  countries: countries,
};

export const countrySlice = createSlice({
  name: 'countries',
  initialState: defaultState,
  reducers: {
    pushCountry(state, action: PayloadAction<string>) {
      state.countries = [...state.countries, action.payload];
    },
  },
});

export default countrySlice.reducer;
