import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import HomePage from './components/HomePage';
import Anime from './components/Pages/Anime';
import LatestBW from './components/Pages/LatestBW';
import LatestPJ from './components/Pages/LatestPJ';
import LatestIP from './components/Pages/LatestIP';
import TopSongs from './components/Pages/TopSongs';
import HS from './components/Pages/HS';
import NRing from './components/Pages/NRing';
import NewDJ from './components/Pages/NewDJ';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/LatestBW" element={<LatestBW />} />
          <Route path="/LatestPJ" element={<LatestPJ />} />
          <Route path="/LatestIP" element={<LatestIP />} />
          <Route path="/TopSongs" element={<TopSongs />} />
          <Route path="/HS" element={<HS />} />
          <Route path="/NRing" element={<NRing />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/NewDJ" element={<NewDJ />} />
          <Route path="*" element={<Navigate to='/Home' />} />
        </Routes>
      </Router>


    </>
  )
}

export default App
