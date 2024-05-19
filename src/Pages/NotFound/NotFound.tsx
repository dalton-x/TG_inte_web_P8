import { Link } from "react-router-dom"

function NotFound() {

  
  document.title = 'Page non trouvée - Kasa'

  return(
    <div className="ks-notFound">
      <div className="ks-notFound-404">
        404
      </div>
      <div className="ks-notFound-text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="ks-notFound-link">
        <Link to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  )
}

export default NotFound