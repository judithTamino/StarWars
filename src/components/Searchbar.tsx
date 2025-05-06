import { IconButton, InputBase, Paper } from '@mui/material';
import { FunctionComponent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useSearch from '../context/searchContext';

interface SearchbarProps {}

const Searchbar: FunctionComponent<SearchbarProps> = () => {
  const { setSearch } = useSearch();
  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', m: 2 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search character'
        aria-label='search'
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type='button'
        sx={{ p: '10px' }}
        aria-label='search'
        color='primary'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
