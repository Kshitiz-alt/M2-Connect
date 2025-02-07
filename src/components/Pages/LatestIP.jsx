import {useNavigate} from 'react-router-dom'
 
export default function LatestIP() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=> navigate('/Home')}>This is LatestPJ!</button>
      
    </div>
  )
}
