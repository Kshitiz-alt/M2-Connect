import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'



import Mainpage from './components/junctions/Mainpage';
import LatestBollywood from './components/junctions/LatestBollywood';
import LatestPunjabi from './components/junctions/LatestPunjabi';
import LatestIndiPOP from './components/junctions/LatestIndiPOP';
import TopSongs2024 from './components/junctions/TopSongs2024';
import HaryanviSongs from './components/junctions/HaryanviSongs';
import NewRingTones from './components/junctions/NewRingTones';
import NewDJRemix from './components/junctions/NewDJRemix';
import Anime from './components/junctions/Anime';
import Login from './Components/Login/Login'

function App() {

  return (
    <>
    {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/About" element={<Mainpage/>}/>
          <Route path="/LatestBollywood" element={<LatestBollywood/>}/>
          <Route path="/Anime" element={<Anime/>}/>
          <Route path="/LatestPunjabi" element={<LatestPunjabi/>}/>
          <Route path="/LatestIndiPOP" element={<LatestIndiPOP/>}/>
          <Route path="/TopSong2024" element={<TopSongs2024/>}/>
          <Route path="/HaryanviSongs" element={<HaryanviSongs/>}/>
          <Route path="/NewRingTones" element={<NewRingTones/>}/>
          <Route path="/NewDJRemix" element={<NewDJRemix/>}/>
          <Route path="*" element={<Navigate to ="About"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
