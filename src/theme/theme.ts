import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#f5f5f5',
      secondary: '#a0a0a0',
    },
    primary: {
      main: '#d72638',
    },
    secondary: {
      main: '#ffd700',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1c1c1c',
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1c1c1c',
      secondary: '#5e5e5e',
    },
    primary: {
      main: '#3f8efc',
    },
    secondary: {
      main: '#ffd700',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
  },
});
