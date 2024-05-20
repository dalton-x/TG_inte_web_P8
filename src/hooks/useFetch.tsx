import { useEffect, useState } from "react"

function useFetch<T>(url: string, options: RequestInit = {}) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<T | null>(null);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json; charset=UTF-8',
        ...options.headers,
      },
    })
    .then(response => response.json())
    .then(response => {
      setResponse(response);
    })
    .catch(() => {
      setErrors('Erreur de chargement des logements');
    })
    .finally(() => {
      setLoading(false);
    });
  }, [url, options]);

  return {
    loading,
    data: response,
    errors,
  };
}

export default useFetch