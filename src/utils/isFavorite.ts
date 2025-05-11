import { ICharacter } from '../interfaces/ICharacter';

export const isFavoriteCharacter = (
  name: string,
  favoriteCharacters: ICharacter[]
): boolean => favoriteCharacters.findIndex((character) => character.name === name) !== -1;
