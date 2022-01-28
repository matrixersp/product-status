import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Statuses from './components/Statuses';
import Boxes from './components/Boxes';

function App() {
  return (
    <Box sx={{ m: 2 }}>
      <Header />
      <Statuses />
      <Divider sx={{ mt: 3, mb: 3 }}/>
      <Boxes />
    </Box>
  );
}

export default App;
