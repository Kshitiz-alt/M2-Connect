

import { useNavigate } from 'react-router-dom'


import Aboutme from './Aboutme'
// import Searchbar from './Search-bar'







function Mainpage() {
    const navigate = useNavigate()

    return (
        <div className="MainBody">
            <nav className="logo">
                <img className="logo1" onClick={() => navigate('/Login')} src="image.png" alt="" />
                <p className="aaloo">
                    M2 CONNECT.com
                </p>
            </nav>
            <div className="buttons">
                {/* Top Row */}
                <div >
                    <button onClick={() => navigate('/LatestBollywood')} className="btn btn-primary" type="submit">
                        Latest Bollywood
                    </button>
                    <input onClick={() => navigate('/LatestPunjabi')} className="btn btn-primary" type="button" value="Latest Punjabi" />
                    <input onClick={() => navigate('/LatestIndiPOP')} className="btn btn-primary" type="submit" value="Latest IndiPOP" />
                    <input onClick={() => navigate('/TopSong2024')} className="btn btn-primary" type="reset" value="Tops Songs 2024" />
                </div>

                {/* Bottom Row */}
                <div >
                    <button onClick={() => navigate('/Anime')} className="btn btn-primary" type="submit">Anime/Video Game Songs</button>
                    <input onClick={() => navigate('/HaryanviSongs')} className="btn btn-primary" type="button" value="Haryanvi Songs" />
                    <input onClick={() => navigate('/NewRingTones')} className="btn btn-primary" type="submit" value="New Ringtones" />
                    <input onClick={() => navigate('/NewDJRemix')} className="btn btn-primary" type="reset" value="New DJ Remix" />
                </div>
            </div>

            {/* <Searchbar /> */}
            <Aboutme />
        </div>
    )
}

export default Mainpage
