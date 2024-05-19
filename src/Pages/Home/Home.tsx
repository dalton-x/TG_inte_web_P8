import { Fragment } from "react/jsx-runtime"
import useFetch from "../../hooks/useFetch"
import HomeCard from "../../Components/HomeCard/HomeCard"

function Home() {
  const {loading, data, errors} = useFetch('src/data/logements.json')
  
  document.title = 'Accueil - Kasa'
  
  return (
    <Fragment>
      <div className="ks-chezVous">
        <div className="ks-chezVous-img ks-row ks-alignItemsCenter ks-justifyContentCenter">
            <div className="ks-chezVous-Text ks-col12">
              Chez vous, partout et ailleurs
            </div>
        </div>
      </div>
      <div className="ks-container ks-home">
        {loading &&
          <div className="ks-row ks-alignItemsCenter ks-justifyContentCenter">
            <div className="ks-col5 ks-textCenter">
            <i className="fa-solid fa-spinner fa-spin fa-5x"></i>
            </div>
          </div>
        }
        {errors && !data && <div className='ks-error'>{errors}</div>}
        {!loading && data && 
          <div>
            <div className="ks-row ks-alignItemsTop ks-justifyContentCenter">
              {data.map((logement, index) => (              
                <div className="ks-col4" key={index}>
                  <HomeCard 
                    key={logement} 
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                  ></HomeCard>
                </div> ))
              }
            </div>
          </div>
        }
      </div>
    </Fragment>
  )
}


export default Home