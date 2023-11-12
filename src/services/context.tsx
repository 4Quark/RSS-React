import { createContext } from 'react';
import { ICharacter } from './types';

interface SearchContextData {
  value: string;
  setValue: (value: string) => void;
  persons: ICharacter[];
  setPersons: (caracters: ICharacter[]) => void;
}

export const SearchContext = createContext<SearchContextData>({
  value: '',
  setValue: () => {},
  persons: [],
  setPersons: () => {},
});

export const SearchProvider = SearchContext.Provider;
