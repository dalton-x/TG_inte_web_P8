import { useEffect, useState } from "react"

function useFetch<T>(url: string, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<T | null>(null);
  const [errors, setErrors] = useState<string>('');

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResponse(data);
        setLoading(false)
      } catch (error) {
        setErrors(error as string);
      }
    }
    fetchLogement()
  }, [url, dependencies])

  return {
    loading: loading,
    data: response,
    errors: errors,
  };
}

export default useFetch