import {
  Box,
  Button,
  Card,
  CardActions,
  Typography,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { ICharacter } from '../interfaces/ICharacter';
import { getCharacterId } from '../utils/getCharacterId';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { isFavoriteCharacter } from '../utils/isFavorite';
import { useFavoriteCharacters } from '../context/favoriteCharacterContext';

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard: FunctionComponent<CharacterCardProps> = ({character}) => {
  const {favoriteCharacters } = useFavoriteCharacters();
  const [isFavorite, setIsFavorite] = useState<boolean>(isFavoriteCharacter(character.name, favoriteCharacters));
  const id: string = getCharacterId(character.url);

  const handleFavorite = (character:ICharacter) => {
    setIsFavorite(!isFavorite);

    const index = favoriteCharacters.findIndex((c:ICharacter) => c.name === character.name );
    if(index === -1)
      favoriteCharacters.push(character);
    else
      favoriteCharacters.splice(index, 1);
      // save fav char array to session storage
      sessionStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        backgroundImage: `url(./characters/${id}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          p: 2,
        }}
      >
        <Typography variant='h3' fontWeight={600} color='secondary'>
          {character.name}
        </Typography>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={() => handleFavorite(character)}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CharacterCard;
