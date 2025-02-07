import {useNavigate} from 'react-router-dom'
export default function NRing() {
    const navigate = useNavigate()
  return (

    <div>
        <button onClick={()=> navigate("/Home")}>This is NewRingTones!</button>
      
    </div>
  )
}
