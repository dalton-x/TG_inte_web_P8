import { Fragment } from "react/jsx-runtime"
import Collapse from "../../Components/Collapse/Collapse"

function APropos() {
  document.title = 'A propos - Kasa'

  const aboutItems = [
    {
      titre :'Fiabilité',
      contenu: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      titre :'Respect',
      contenu: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      titre :'Service',
      contenu: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      titre :'Sécurité',
      contenu: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]

  return (
    <Fragment>
      <div className="ks-aPropos-img"></div>
      <div className="ks-aPropos-container">
        {aboutItems.map((apropos, index) => (
          <Collapse
            title={apropos.titre}
            content={apropos.contenu}
            key={index}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default APropos