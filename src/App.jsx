import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'



import Mainpage from './junctions/Mainpage';
import LatestBollywood from './junctions/LatestBollywood';

import LatestPunjabi from './junctions/LatestPunjabi';
import LatestIndiPOP from './junctions/LatestIndiPOP';
import TopSongs2024 from './junctions/TopSongs2024';
import HaryanviSongs from './junctions/HaryanviSongs';
import NewRingTones from './junctions/NewRingTones';
import NewDJRemix from './junctions/NewDJRemix';

import MainLogin from './junctions/MainLogin';
import Anime from './junctions/Anime';


function App() {

  return (
    <>
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
          {/* <Route path="/Login" element={<MainLogin/>}/> */}
          <Route path="*" element={<Navigate to ="About"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
