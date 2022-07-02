export interface IPokemon {
  id: number;
  name: {
    english: string;
  };
  type: string[];
  base: {
    [key: string]: number;
  };
}
