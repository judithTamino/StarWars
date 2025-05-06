import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { FunctionComponent, Dispatch, SetStateAction } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavbarProps {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FunctionComponent<NavbarProps> = ({ setTheme, theme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
            className='logo'
            color='primary'
          >
            StarWars
          </Typography>
          <IconButton onClick={() => setTheme(!theme)} color='primary'>
            {theme ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
