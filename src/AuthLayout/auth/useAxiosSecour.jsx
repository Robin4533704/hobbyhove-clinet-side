import { useState, useEffect } from "react";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // আপনার backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecour = (config) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!config) return;
    setLoading(true);
    try {
      const response = await axiosInstance(config); 
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(config)]);

  return { data, loading, error, refetch: fetchData };
};

export default useAxiosSecour;
