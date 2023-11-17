import { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter, ICharacterState } from '../types';

const defaultState: ICharacterState = {
  characters: [],
};

export const updateCharacters = (payload: ICharacter[]) => ({
  type: 'SET_CHARACTERS',
  payload,
});

export const charactersReducer = (
  state = defaultState,
  action: PayloadAction<{ characters: ICharacter[] }>
) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};
