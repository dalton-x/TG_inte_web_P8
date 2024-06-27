import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import HomeCardInterface from "../../Interfaces/HomeCardInterface"

import "./HomeCard.css"


HomeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}


function HomeCard(props: Readonly<HomeCardInterface>) {
  const { title, cover, id } = props;

  return(
    <div className="ks-cardLogement">
      <Link to={`/logement/${id}`}>
        <div className="ks-cardLogement-cover">
					<img src={cover} alt="" />
            <div className="ks-cardLogement-cover-title">{title}</div>
				</div>
      </Link>
    </div>
  )
}


export default HomeCard