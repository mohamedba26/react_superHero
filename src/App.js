import './App.css';
import GetAllSuperHeroes from './components/GetAllSuperHeroes';
import GetAllMovies from './components/GetAllMovies';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<GetAllSuperHeroes/>}></Route>
          <Route path="/SuperHero" element={<GetAllSuperHeroes/>}></Route>
          <Route path="/Movie" element={<GetAllMovies/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
