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
  confirmPassword: string;
}
