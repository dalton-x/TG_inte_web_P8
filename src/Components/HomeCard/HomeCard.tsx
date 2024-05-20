import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

HomeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

interface HomeCardProps {
  title: string;
  cover: string;
  id: string;
}

function HomeCard(props: Readonly<HomeCardProps>) {
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