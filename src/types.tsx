export interface ITilesState {
  tiles: ITile[];
  lastTile: ITile | null;
}

export interface ITile {
  accept: boolean;
  age: number;
  country: string;
  email: string;
  file: FileList;
  gender: string;
  name: string;
  password: string;
  passwordRepeat: string;
}

export interface IData {
  accept: boolean;
  age: number;
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
