import { Link } from "react-router-dom"

function HomeCard(logement) {

  return(
    <div className="ks-cardLogement" key={logement.index}>
      <Link to={`/logement/${logement.id}`}>
        <div className="ks-cardLogement-cover">
					<img src={logement.cover} alt="" />
          <div className="ks-row ks-justifyContentCenter">
            <div className="ks-col10">
              <div className="ks-cardLogement-title">{logement.title}</div>
            </div>
          </div>
				</div>
      </Link>
    </div>
  )
}

export default HomeCard