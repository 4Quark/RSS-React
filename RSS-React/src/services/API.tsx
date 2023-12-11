import axios, { AxiosResponse } from 'axios';
import { ICharacter, IResult } from './types';

export const searchCharacter = async (id: number) => {
  try {
    const response: AxiosResponse<ICharacter> = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  }
};

export const searchAll = async (page: number) => {
  const savedSearchValue: string = localStorage.getItem('searchInput') || '';
  const link =
    savedSearchValue === ''
      ? `https://rickandmortyapi.com/api/character/?page=${page}`
      : `https://rickandmortyapi.com/api/character/?name=${savedSearchValue}&page=${page}`;
  try {
    const response: AxiosResponse<IResult> = await axios.get(link);
    const persons = response.data.results;
    return { persons: persons, pages: response.data.info.pages };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return { persons: [], pages: 1 };
      } else console.error(error);
    }
  }
};
