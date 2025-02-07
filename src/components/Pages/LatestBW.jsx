import { useNavigate } from 'react-router-dom'

export default function LatestBW() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/Home')}>This is Bollyood! </button>

        </div>
    )
}
