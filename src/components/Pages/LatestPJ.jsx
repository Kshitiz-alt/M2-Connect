import {useNavigate} from 'react-router-dom'
 
export default function LatestPJ() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=> navigate("/Home")}>This is Punjabi!</button>
      
    </div>
  )
}
