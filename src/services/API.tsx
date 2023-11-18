import axios, { AxiosResponse } from 'axios';
import { ICharacter, IResult } from './types';
import { AppDispatch } from './store/store';
import { charactersSlice } from './store/charactersReducer';
import { pagesSlice } from './store/paginationReducer';
import { singleSlice } from './store/singleReducer';

export const fetchCharacters =
  (page: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(charactersSlice.actions.charactersFetching());
      const localValue: string = localStorage.getItem('searchInput') || '';
      const link =
        localValue == ''
          ? `https://rickandmortyapi.com/api/character/?page=${page}`
          : `https://rickandmortyapi.com/api/character/?name=${localValue}&page=${page}`;
      const response: AxiosResponse<IResult> = await axios.get(link);
      dispatch(
        charactersSlice.actions.charactersFetchingSuccess(response.data.results)
      );
      dispatch(pagesSlice.actions.updateTotalPages(response.data.info.pages));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          dispatch(charactersSlice.actions.charactersFetchingError('404'));
        } else {
          dispatch(
            charactersSlice.actions.charactersFetchingError(error.message)
          );
        }
      }
    }
  };

export const fetchSingle = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(singleSlice.actions.singleFetching());
    const response: AxiosResponse<ICharacter> = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    dispatch(singleSlice.actions.singleFetchingSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(singleSlice.actions.singleFetchingError(error.message));
    }
  }
};
