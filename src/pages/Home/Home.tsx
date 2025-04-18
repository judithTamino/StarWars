import { Grid } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { getCharacters } from '../../services/charactersService';
import { errMsg } from '../../services/feedbackService';
import CharacterCard from '../../components/CharacterCard';
import { ICharacter } from '../../interfaces/ICharacter';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCharacters()
      .then((res) => setCharacters(res.data))
      .catch((error) => errMsg(error.response.data));
  }, []);

  return (
    <Grid container spacing={4}>
      {characters.map((character, index) => (
        <CharacterCard character={character} key={index}/>
      ))}
    </Grid>
  );
};

export default Home;
