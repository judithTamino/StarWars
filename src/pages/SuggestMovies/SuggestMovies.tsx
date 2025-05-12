import { Box, Card, Chip, Grid, Typography } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { useFavoriteCharacters } from '../../context/favoriteCharacterContext';
import { IFilms } from '../../interfaces/IFilms';
import { getFilm } from '../../services/filmsService';
import { errMsg } from '../../services/feedbackService';
import { getCharacterId } from '../../utils/getCharacterId';

interface SuggestMoviesProps {}

const SuggestMovies: FunctionComponent<SuggestMoviesProps> = () => {
  const [films, setFilms] = useState<IFilms[]>([]);
  const [filmScore, setFilmScore] = useState<Record<string, number>>({});
  const { favoriteCharacters } = useFavoriteCharacters();

  const countCharacters = () => {
    const newScore: Record<string, number> = {};

    favoriteCharacters.forEach((character) => {
      character.films.forEach((url) => {
        newScore[url] = (newScore[url] || 0) + 1;
      });
    });

    setFilmScore(newScore);
  };

  useEffect(() => {
    countCharacters();
  }, [favoriteCharacters]);

  useEffect(() => {
    const sortedFilmUrls = Object.entries(filmScore)
      .sort((a, b) => b[1] - a[1])
      .map(([url]) => url);

    sortedFilmUrls.forEach((film) => {
      getFilm(film)
        .then((response) => {
          setFilms(prev => [...prev, response.data])
        })
        .catch((error) => errMsg(error.response.data));
    });
  }, [filmScore]);

 
  return (
    <Box>
      {films.length === 0 ? (
        <Typography component='h2' variant='h1'>
          No Suggest Movies Found
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {films.map((film, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: 500,
                  backgroundImage: `url(./films/${getCharacterId(
                    film.url
                  )}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Chip sx={{ m: 2 }} label={`${index + 1}`} color='primary' />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SuggestMovies;
