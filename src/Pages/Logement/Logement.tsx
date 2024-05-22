import { useNavigate, useParams } from "react-router-dom"
import Caroussel from "../../Components/Caroussel/Caroussel";
import { useState, useEffect } from 'react';
import Loading from "../../Components/Loading/Loading";
import Rating from "../../Components/Rating/Rating";
import Collapse from "../../Components/Collapse/Collapse";

interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

function Logement() {
  const { idLogement } = useParams();
  const navigate = useNavigate();

  const [logement, setLogement] = useState<Logement | null>(null);
  const [imageCarrousel, setImageCarrousel] = useState<string[]>([]);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch('../src/data/logements.json');
        const data: Logement[] = await response.json();
        const selectLogement = data.find(({ id }) => id === idLogement);
        if (selectLogement) {
          setLogement(selectLogement);
          setImageCarrousel(selectLogement.pictures);
          document.title = `Logement - ${selectLogement.title} - Kasa`;
        } else {
          navigate('/404');
        }
      } catch (error) {
        console.error(error);
        navigate('/404');
      }
    };
    fetchLogement();
  }, [idLogement, navigate]);

  if (!logement) {
    return <Loading/>
  }

  return (
    <div className="ks-logement">
      <Caroussel images={imageCarrousel} />
      <div className="ks-logement-info">
        <div className="ks-logement-info-title">{logement.title}
          <div className="ks-logement-info-title-location">{logement.location}</div>
        </div>
        <div className="ks-logement-info-host">
          <div className="ks-logement-info-host-name">{logement.host.name}</div>
          <div className="ks-logement-info-host-picture"><img src={logement.host.picture} alt="" /></div>
        </div>
      </div>
      <div className="ks-logement-tags-rating">
        <div className="ks-logement-tags">
          {logement.tags.map((tag, index) =>(
            <span className="ks-logement-tags-tag"  key={`${index}-${tag}`}>{tag}</span>
          ))}
        </div>
        <div className="ks-logement-rating">
          <Rating note={parseInt(logement.rating)}/>
        </div>
      </div>
      <div className="ks-logement-collapse">
        <div className="ks-logement-collapse-description">
          <Collapse
          title="Description"
          content={logement.description}/>
        </div>
        <div className="ks-logement-collapse-equipements">
          <Collapse
          title="Équipements"
          content={logement.equipments}/>
        </div>
      </div>
    </div>
  );
}

export default Logement