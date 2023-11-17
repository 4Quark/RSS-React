import { EmptyObject } from '@reduxjs/toolkit';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IResult {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacter[];
}

export interface ICharacterState {
  characters: ICharacter[];
}

export interface ICounterState {
  homeCounter: number;
}

export interface IValueState {
  searchValue: string;
}

export type RootState = EmptyObject & {
  count: ICounterState;
  value: IValueState;
  characters: ICharacterState;
};
