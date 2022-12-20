import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Aloitus from './components/Aloitus';
import Uutinen from './components/Uutinen';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar style={{margin: "auto"}}>
            <Typography variant="h4">
              <Link to="/" style={{ textDecoration: 'none', color: '#FFF'}}>
                <HomeIcon fontSize='large' sx={{ mr: 3, mb: 0 }} />
                UUTISSOVELLUS
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route index element={<Aloitus />} />
          <Route path="/uutissovellus" element={<Aloitus />} />
          <Route path="/Uutinen/:indeksi" element={<Uutinen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;