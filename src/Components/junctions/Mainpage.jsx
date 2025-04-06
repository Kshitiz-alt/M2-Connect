import { useNavigate } from 'react-router-dom'
import Content from './Content'
export default function Mainpage() {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <nav className="bg-transparent flex gap-[30rem] items-center">
                    <img className=" h-[8rem] ml-[15rem] p-2 rounded-full" onClick={() => navigate('/Login')} src="/image.png" alt="" />
                    <p className="text-5xl m-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-white">
                        M2 CONNECT
                    </p>
                </nav>
            </div>
            <div className="m-3 flex">
                <div className="buttons">
                    <div className='text-black flex flex-col gap-2 w-[18rem]'>
                        <button onClick={() => navigate('/LatestBollywood')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="submit">
                            Latest Bollywood
                        </button>
                        <input onClick={() => navigate('/LatestPunjabi')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="button" value="Latest Punjabi" />
                        <input onClick={() => navigate('/LatestIndiPOP')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="button" value="Latest IndiPOP" />
                        <input onClick={() => navigate('/TopSong2024')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="button" value="Tops Songs 2024" />
                        <input onClick={() => navigate('/Anime')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="submit" value="Anime/Video" />
                        <input onClick={() => navigate('/HaryanviSongs')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="button" value="Haryanvi Songs" />
                        <input onClick={() => navigate('/NewRingTones')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="button" value="New Ringtones" />
                        <input onClick={() => navigate('/NewDJRemix')} className="border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl" type="button" value="New DJ Remix" />
                    </div>
                </div>
                <Content />
            </div>
        </div>
    )
}
