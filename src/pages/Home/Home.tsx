import { Box, Button, Grid } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { getCharacters } from '../../services/charactersService';
import { errMsg } from '../../services/feedbackService';
import CharacterCard from '../../components/CharacterCard';
import { ICharacter } from '../../interfaces/ICharacter';
import Searchbar from '../../components/Searchbar';
import useSearch from '../../context/searchContext';
import { useNavigate } from 'react-router-dom';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const { search } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacters()
      .then((res) => setCharacters(res.data))
      .catch((error) => errMsg(error.response.data));
  }, []);

  const filterCharacters = characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(search)
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <Searchbar />
      <Grid container spacing={4}>
        {filterCharacters.map((character, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <CharacterCard
              character={character}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant='contained'
        color='primary'
        sx={{
          position: 'fixed',
          bottom: 8,
          right: 8,
          zIndex: '100'
        }}
        onClick={() => navigate("/movies")}
      >
        suggest movies
      </Button>
    </Box>
  );
};

export default Home;
