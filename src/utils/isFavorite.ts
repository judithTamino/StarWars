export const isFavoriteCharacter = (name: string, favoriteCharacters:string[]) : boolean => {
  return favoriteCharacters.indexOf(name) !== -1;
}