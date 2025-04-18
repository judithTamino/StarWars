import { Card, CardMedia, Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import { ICharacter } from '../interfaces/ICharacter';
import { getCharacterId } from '../utils/getCharacterId';

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard: FunctionComponent<CharacterCardProps> = ({
  character,
}) => {
  const id = getCharacterId(character.url); 
  return (
    <Grid size={{xs:12, sm: 6, md: 3}}>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 350 }}
          image={`/${id}.jpg`}
          title = {character.name}
        />
      </Card>
    </Grid>
  );
};

export default CharacterCard;
