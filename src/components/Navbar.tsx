import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { FunctionComponent, Dispatch, SetStateAction } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FunctionComponent<NavbarProps> = ({ setTheme, theme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {/* <NavLink to='/'> */}
            <Typography
              variant='h5'
              sx={{ flexGrow: 1, textDecoration: 'none' }}
              className='logo'
              color='primary'
              component={NavLink}
              to='/'
            >
              StarWars
            </Typography>
          {/* </NavLink> */}
          <IconButton onClick={() => setTheme(!theme)} color='primary'>
            {theme ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
