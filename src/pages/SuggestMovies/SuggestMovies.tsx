import { Box, Card, Grid } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { useFavoriteCharacters } from '../../context/favoriteCharacterContext';
import { IFilms } from '../../interfaces/IFilms';
import { getFilm } from '../../services/filmsService';
import { errMsg } from '../../services/feedbackService';

interface SuggestMoviesProps {}

const SuggestMovies: FunctionComponent<SuggestMoviesProps> = () => {
  const [films,] = useState<IFilms[]>([]);
  const { favoriteCharacters } = useFavoriteCharacters();
  const filmScore: Record<string, number> = {};
  let sortedFilms:string[] = [];

  useEffect(() => {
    countCharacters();

sortedFilms.forEach((film) => {
  getFilm(film)
  .then((response) => {
    films.push(response.data);
  })
  .catch((error) => errMsg(error.response.data))
})
  }, []);

  // func that count how many characters appear in each film
  function countCharacters() {
    favoriteCharacters.forEach((character) => {
      character.films.forEach((url) => {
        filmScore[url] = (filmScore[url] || 0) + 1;
      });
    });
    sortFilms();
  }

  // func => sort the films based on the number of fav characters
  function sortFilms() {
   sortedFilms =  Object.keys(filmScore).sort((filmOne, filmTwo) => filmScore[filmTwo] - filmScore[filmOne]).map((url => url));
  }

  return <Box>
<Grid container spacing={4}>
  {
    films.map((film, index) => (
      <Grid key={index} size={{xs: 12, sm: 6, md: 4}}>
        <Card sx={{
          maxWidth: 345,
          height: 400,

        }}></Card>
      </Grid>
    ))
  }
</Grid>
  </Box>;
};

export default SuggestMovies;
