import {useNavigate} from 'react-router-dom'
export default function NewDJ() {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=> navigate("/Home")}>This is NewDJ Remixes</button>
    </div>
  )
}
