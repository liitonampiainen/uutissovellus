import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Aloitus from './components/Aloitus';
import Uutinen from './components/Uutinen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar style={{margin: "auto"}}>
            <Typography variant="h4">
              <Link to="/" style={{ textDecoration: 'none', color: '#FFF'}}>
                <HomeIcon fontSize='large' sx={{ mr: 3 }} />
                UUTISSOVELLUS
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h6"  sx={{ mt: 2 }}>
          <Link to="/Uutinen">"Väliaikainen linkki Uutinen.js"</Link>
        </Typography>
        <Routes>
          <Route path="/" element={<Aloitus />} />
          <Route path="/Uutinen/:indeksi" element={<Uutinen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;