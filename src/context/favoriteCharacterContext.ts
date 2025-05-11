import { createContext, useContext } from 'react';
import { ICharacter } from '../interfaces/ICharacter';

export interface IFavoriteCharacters {
  favoriteCharacters: ICharacter[];
}

export const FavoriteCharactersContext = createContext<
  IFavoriteCharacters | undefined
>(undefined);

export const FavoriteCharactersProvider = FavoriteCharactersContext.Provider;

export const useFavoriteCharacters = () =>
  useContext(FavoriteCharactersContext) as IFavoriteCharacters;
