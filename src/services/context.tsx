import { createContext } from 'react';
import { ICharacter } from './types';

interface SearchContextData {
  persons: ICharacter[];
  setPersons: (caracters: ICharacter[]) => void;
}

export const SearchContext = createContext<SearchContextData>({
  persons: [],
  setPersons: () => {},
});

export const SearchProvider = SearchContext.Provider;
