import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'c93a420a4fmsh7f0fb32bce290d7p11ab73jsn3c7cb316863f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      alert("there is an error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isloading, error, refetch };
};

export default useFetch;