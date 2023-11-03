import axios, { AxiosResponse } from 'axios';
import { ICharacter, IResult } from './types';

export const searchCaracter = async (
  id: number,
  handlePerson: (person: ICharacter) => void
) => {
  try {
    const response: AxiosResponse<ICharacter> = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    handlePerson(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  }
};

export const searchAll = async (
  page: number,
  handleCallback: (persons: ICharacter[], pages: number) => void
) => {
  const localValue: string = localStorage.getItem('searchInput') || '';
  const link =
    localValue == ''
      ? 'https://rickandmortyapi.com/api/character'
      : `https://rickandmortyapi.com/api/character/?name=${localValue}&page=${page}`;
  try {
    const response: AxiosResponse<IResult> = await axios.get(link);
    const persons = response.data.results;
    handleCallback(persons, response.data.info.pages);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        handleCallback([], 1);
      } else console.error(error);
    }
  }
};
