import { Box } from '@mui/material';
import { FunctionComponent } from 'react';
import { ICharacter } from '../../interfaces/ICharacter';


interface SuggestMoviesProps {
  favoriteCharacters: ICharacter[];
}

const SuggestMovies: FunctionComponent<SuggestMoviesProps> = ({favoriteCharacters}) => {

  return <Box></Box>;
};

export default SuggestMovies;
