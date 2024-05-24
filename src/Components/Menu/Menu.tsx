import { Link } from "react-router-dom"

function Menu( )
{
  return (
    <div className="ks-logo">
      <Link to="" >
        <img src={`${import.meta.env.VITE_BASE_URL}/static/assets/logo.png`} alt="Logo" />
      </Link>
    </div>
  )
}

export default Menu