import { useState, useEffect } from "react";

const useFetch = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchApiData = async () => {
      const apiData = await fetch("https://fakestoreapi.com/products/1");
      const data = await apiData.json();
      setApiData(data);
    };
    fetchApiData();
  }, []);

  return apiData;
};

export default useFetch;
