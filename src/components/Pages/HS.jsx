import {useNavigate} from 'react-router-dom'

export default function HS() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=> navigate("/Home")}></button>
      
    </div>
  )
}
