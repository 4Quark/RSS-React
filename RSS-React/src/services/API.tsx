import axios, { AxiosResponse } from 'axios';
import { ICharacter, IResult } from './types';

export class RickAndMortyService {
  private static baseURL: string = 'https://rickandmortyapi.com/api/character';

  public static async getSingleCharacter(
    characterId: number
  ): Promise<ICharacter> {
    const response: AxiosResponse<ICharacter> = await axios.get(
      `${RickAndMortyService.baseURL}/${characterId}`
    );
    return response.data;
  }

  public static async searchCharactersByName(
    page: number
  ): Promise<{ characterList: ICharacter[]; pages: number }> {
    const savedSearchValue: string = localStorage.getItem('searchInput') || '';
    const link = `${RickAndMortyService.baseURL}/${
      savedSearchValue ? `?name=${savedSearchValue}&` : '?'
    }page=${page}`;
    const response: AxiosResponse<IResult> = await axios.get(link);
    const persons = response.data.results;
    return { characterList: persons, pages: response.data.info.pages };
  }
}
