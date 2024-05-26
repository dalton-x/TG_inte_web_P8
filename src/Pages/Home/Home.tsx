import useFetch from "../../hooks/useFetch"
import HomeCard from "../../Components/HomeCard/HomeCard"
import Error from "../../Components/Error/Error"
import Loading from "../../Components/Loading/Loading"

interface LogementData {
  id: string;
  title: string;
  cover: string;
}

function Home() {
  const { loading, data, errors } = useFetch<LogementData[]>(`../${import.meta.env.VITE_API}`);  
  
  document.title = `Accueil - ${import.meta.env.VITE_APP_NAME}`;
  
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
        {loading &&
          <Loading/>
        }
        {errors && !data && <Error errors={errors}/>}
        {!loading && data && 
          <div>
            <div className="ks-home-cards">
              {data.map((logement) => (
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
  );
}

export default Home;