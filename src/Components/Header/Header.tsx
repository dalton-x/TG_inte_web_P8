import { Link, useLocation } from "react-router-dom"

function Header() {

  const location = useLocation();

  return (
    <header>
      <div className="ks-logo">
        <Link to="" >
          <img src="data:image/png;base64,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" alt="Logo" />
        </Link>
      </div>
      <div className="ks-nav">
        <Link 
            to="/home"
            className={`ks-nav-link ${location.pathname === '/home' ? 'active' : ''}`}
          >
            Accueil
        </Link>
        <Link 
            to="/a-propos"
            className={`ks-nav-link ${location.pathname === '/a-propos' ? 'active' : ''}`}
          >
            À Propos
          </Link>
      </div>
    </header>
  )
}



export default Header