export interface ITilesState {
  tiles: ITile[];
  lastTile: ITile | null;
}

export interface ITile {
  accept: boolean;
  age: number;
  country: string;
  email: string;
  file: FileList | null;
  gender: string;
  name: string;
  password: string;
  passwordRepeat: string;
}

export interface IData {
  accept: boolean;
  age: string;
  country: string;
  email: string;
  file: FileList;
  gender: string;
  name: string;
  password: string;
  passwordRepeat: string;
}

export interface IForm {
  data: IData | null;
}

export type formData = {
  accept: boolean;
  age: number;
  country: string;
  email: string;
  file: FileList;
  gender: string;
  name: string;
  password: string;
  confirmPassword: string;
};
