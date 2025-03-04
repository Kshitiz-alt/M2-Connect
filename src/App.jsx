import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'



import Mainpage from './components/Mainpage';
import LatestBollywood from './components/LatestBollywood';

import LatestPunjabi from './components/LatestPunjabi';
import LatestIndiPOP from './components/LatestIndiPOP';
import TopSongs2024 from './components/TopSongs2024';
import HaryanviSongs from './components/HaryanviSongs';
import NewRingTones from './components/NewRingTones';
import NewDJRemix from './components/NewDJRemix';

import MainLogin from './components/MainLogin';
import Anime from './components/Anime';


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
