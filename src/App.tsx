import { Container } from '@mui/material';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Container maxWidth="sm">
        <Home />
      </Container>
    </>
  );
}

export default App;
