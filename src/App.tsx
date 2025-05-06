import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import { useMemo, useState } from 'react';
import { darkTheme, lightTheme } from './theme/theme';
import Navbar from './components/Navbar';
import { SearchProvider } from './context/searchContext';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const theme = useMemo(
    () => (isDarkTheme ? darkTheme : lightTheme),
    [isDarkTheme]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <Navbar setTheme={setIsDarkTheme} theme={isDarkTheme} />
      <Container maxWidth='lg' sx={{ mt: 2, mb: 2 }}>
        <SearchProvider value={{ search, setSearch }}>
          <Home />
        </SearchProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
