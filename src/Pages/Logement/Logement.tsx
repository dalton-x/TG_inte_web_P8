import { useNavigate, useParams } from "react-router-dom"
import Caroussel from "../../Components/Caroussel/Caroussel";
import { useState, useEffect } from 'react';
import Loading from "../../Components/Loading/Loading";
import Rating from "../../Components/Rating/Rating";
import Collapse from "../../Components/Collapse/Collapse";
import useFetch from "../../hooks/useFetch";

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
  const { loading, data, errors } = useFetch<Logement[]>(`../${import.meta.env.VITE_API}`);
 
  useEffect(() => {
    if (data) {
      const selectedLogement = data.find(({ id }) => id === idLogement);
      if (selectedLogement) {
        setLogement(selectedLogement);
        setImageCarrousel(selectedLogement.pictures);
        document.title = `Logement - ${selectedLogement.title} - ${
          import.meta.env.VITE_APP_NAME
        }`;
      } else {
        navigate('/404');
      }
    } else if (errors) {
      navigate('/404');
    }
  }, [data, idLogement, navigate, errors]);

  if (loading) {
    return <Loading />;
  }

  if (errors) {
    navigate('/404');
    return null;
  }

  if (!logement) {
    return null;
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