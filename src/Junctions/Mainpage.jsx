

import { useNavigate } from 'react-router-dom'


// import Searchbar from './Search-bar'







function Mainpage() {
    const navigate = useNavigate()

    return (
        <div className="">
            <nav className="">
                <img className="" onClick={() => navigate('/Login')} src="/image.png" alt="" />
                <p className="">
                    M2 CONNECT.com
                </p>
            </nav>
            <div className="buttons">
                {/* Top Row */}
                <div >
                    <button onClick={() => navigate('/LatestBollywood')} className="" type="submit">
                        Latest Bollywood
                    </button>
                    <input onClick={() => navigate('/LatestPunjabi')} className="" type="button" value="Latest Punjabi" />
                    <input onClick={() => navigate('/LatestIndiPOP')} className="" type="submit" value="Latest IndiPOP" />
                    <input onClick={() => navigate('/TopSong2024')} className="" type="reset" value="Tops Songs 2024" />
                </div>

                {/* Bottom Row */}
                <div >
                    <button onClick={() => navigate('/Anime')} className="" type="submit">Anime/Video Game Songs</button>
                    <input onClick={() => navigate('/HaryanviSongs')} className="" type="button" value="Haryanvi Songs" />
                    <input onClick={() => navigate('/NewRingTones')} className="" type="submit" value="New Ringtones" />
                    <input onClick={() => navigate('/NewDJRemix')} className="" type="reset" value="New DJ Remix" />
                </div>
            </div>

            {/* <Searchbar /> */}      
          </div>
    )
}

export default Mainpage
