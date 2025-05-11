import { Box } from '@mui/material';
import { FunctionComponent } from 'react';
import { useFavoriteCharacters } from '../../context/favoriteCharacterContext';


interface SuggestMoviesProps {}

const SuggestMovies: FunctionComponent<SuggestMoviesProps> = () => {
  const { favoriteCharacters } = useFavoriteCharacters();

  return <Box></Box>;
};

export default SuggestMovies;
