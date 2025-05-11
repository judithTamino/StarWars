import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { useMemo, useState } from 'react';
import { darkTheme, lightTheme } from './theme/theme';
import Navbar from './components/Navbar';
import { SearchProvider } from './context/searchContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import { ICharacter } from './interfaces/ICharacter';
import { FavoriteCharactersProvider } from './context/favoriteCharacterContext';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const stored = sessionStorage.getItem('favoriteCharacters');
  const favoriteCharacters: ICharacter[] = stored ? JSON.parse(stored) : [];
  const theme = useMemo(
    () => (isDarkTheme ? darkTheme : lightTheme),
    [isDarkTheme]
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <ToastContainer />
        <Navbar setTheme={setIsDarkTheme} theme={isDarkTheme} />
        <Container maxWidth='lg' sx={{ mt: 2, mb: 2 }}>
          <SearchProvider value={{ search, setSearch }}>
            <FavoriteCharactersProvider value={{favoriteCharacters}}>
              <AppRoutes />
            </FavoriteCharactersProvider>
          </SearchProvider>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
