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

interface CharacterCardProps {
  character: ICharacter;
  favoriteCharacters: string[];
}

const CharacterCard: FunctionComponent<CharacterCardProps> = ({
  character,
  favoriteCharacters,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const id: string = getCharacterId(character.url);

  const handleFavorite = (name: string) => {
    setIsFavorite(!isFavorite);

    const index = favoriteCharacters.indexOf(name);
    if(index === -1)
      favoriteCharacters.push(name);
    else
      favoriteCharacters.splice(index, 1);
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
            onClick={() => handleFavorite(character.name)}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CharacterCard;
