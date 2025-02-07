import {useNavigate} from 'react-router-dom'
export default function TopSongs() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=> navigate("/Home")}>This is Top Songs!</button>
      
    </div>
  )
}
