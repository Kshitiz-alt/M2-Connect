import {useNavigate} from 'react-router-dom'
import '../styles/Pages.css'
import '../styles/Responsive320px.css'
export default function NewRingTones() {
    const navigate = useNavigate()
  return (
    <div className="NewRT">
      <nav className="navbar bg-body-tertiary">
        <div className="Navbar">
          <button className="Mainpage" data-back="Go Back" data-front="RingTones" onClick={() => navigate('/About')}>
            

          </button>
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}
