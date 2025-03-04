import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Responsive320px.css';
import '../styles/Pages.css';

export default function Anime() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  // Fetch multiple songs
  const getPlaylists = useCallback(async () => {
    setLoading(true);
    setError(null);
    const songIds = "b4_q01vV,ofIPH19K,C6oTQDnn,YjxbL_Ds,_GRT1t_X,jQoff-XF,pMpdImHV,obYu0rYi,nKkfVqTg,l-FULCFa,I8ZRcsVK,yNF34s8t,xq-0V4Vd,YQDMNtEW,vOlrugpt,fxPw00j3,DoNif6Cu,2d7IB13Y,AuT-tQzb,CqFTFJq4,A1-gpKvq,BfFbGKjF,uG39Iovn,sDV3E0A4"; // Add more song IDs if needed

    try {
      const response = await axios.get(`https://saavn.dev/api/songs?ids=${songIds}`);
      const songData = response.data.data;

      if (!songData) {
        throw new Error("No songs found.");
      }

      // Convert the object to an array of songs
      const formattedPlaylists = Object.values(songData).map(song => ({
        id: song.id,
        name: song.name,
        image: song.image[2]?.url || "", // Using the 3rd image size
        artist: song.artists.primary[0]?.name || "Unknown Artist",
        downloadUrls: song.downloadUrl || [], // Available download links
      }));

      setPlaylists(formattedPlaylists);
    } catch (error) {
      console.error("Couldn't fetch data", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  // Handle search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://saavn.dev/api/search/songs?query=${query}&limit=20`);
      const { data } = res.data;
      setAlbums(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Anime">
      <nav className="navbar bg-body-tertiary">
        <div className="Navbar">
          <button className="Mainpage" data-back="Go Back" data-front="Haryanvi" onClick={() => navigate('/About')}></button>
          <form className="d-flex border rounded-[40px]" onSubmit={handleSearch} role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn-search relative right-[3em]" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {loading && <div className="spinner">Loading...</div>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Displaying Searched Albums */}
      <div className="Tracks1">
        <div className="flex overflow-x-scroll">
          {albums?.map((album) => (
            <div key={album.id} className="flex WIDTH overflow-y-clip justify-center items-center text-white gap-[3em] h-[90vh]">
              <img className="ImageGuards p-[20px] left-[5em]" src={album.image[2].url} alt={`Cover for ${album.name}`} />
              <div>
                <span className="text-white">{album.artists.featured?.name || "Unknown Artist"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Displaying Playlist Songs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {playlists.length > 0 ? (
          playlists.map((song) => (
            <div key={song.id} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              {/* Song Image */}
              <img className="w-40 h-40 object-cover rounded-lg" src={song.image} alt={song.name} />

              {/* Song Info */}
              <div className="text-center mt-2">
                <h3 className="text-lg font-bold text-white">{song.name}</h3>
                <p className="text-sm text-gray-300">{song.artist}</p>

                {/* Download Button */}
                {song.downloadUrls.length > 0 && (
                  <a
                    href={song.downloadUrls.find(url => url.quality === "320kbps")?.url || song.downloadUrls[0].url}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 mt-2 rounded inline-block"
                    download
                  >
                    Download 320kbps
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No songs available.</p>
        )}
      </div>
    </div>
  );
}
