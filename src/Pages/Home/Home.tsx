import useFetch from "../../hooks/useFetch"
import HomeCard from "../../Components/HomeCard/HomeCard"
import Error from "../../Components/Error/Error"
import Loading from "../../Components/Loading/Loading"

function Home() {
  const {loading, data, errors} = useFetch('src/data/logements.json')
  
  document.title = 'Accueil - Kasa'
  
  return (
    <div className="ks-home">
      <div className="ks-chezVous">
        <div className="ks-chezVous-img">
            <div className="ks-chezVous-Text">
              Chez vous, partout et ailleurs
            </div>
        </div>
      </div>
      <div className="ks-container ks-home">
        {/* Spinner pour le temps de chargement */}
        {loading &&
          <Loading/>
        }
        {/* Gestion des erreurs de chargements */}
        {!loading && errors && !data && <Error errors={errors}/>}
        {/* Affichage des données */}
        {!loading && data && 
          <div>
            <div className="ks-home-cards">
              {data.map((logement: { id: string; title: string; cover: string }) => (
                <div className="ks-home-card-wrapper" key={logement.id}>
                  <HomeCard
                    title={logement.title}
                    cover={logement.cover}
                    id={logement.id}
                  ></HomeCard>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  )
}


export default Home