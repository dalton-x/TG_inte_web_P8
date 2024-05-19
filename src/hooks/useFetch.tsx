import { useEffect, useState } from "react"

function useFetch(url:string, options={}){
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState('')  

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json; charset=UTF-8',
        ...options.headers,
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(()=> {
      setErrors('Erreur de chargement des logements')
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return {
    loading : loading,
    data: data,
    errors: errors
  }
}

export default useFetch