
import { useNavigate } from 'react-router-dom'
export default function Anime() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/Home')}>This is Anime!</button>
        </div>
    )
}
