import { useNavigate } from 'react-router-dom'

export default function MainLogin() {

  const navigate = useNavigate()
  return (
    <>
      <div className="MainLogin">
        <button onClick={() => navigate('/About')}></button>
      </div>
    </>
  )
}
