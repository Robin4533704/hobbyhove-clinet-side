// useAxios.js
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebase/Firebase.config";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Axios interceptor দিয়ে token attach করা হচ্ছে
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

const useAxios = (config) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api(config); // Axios instance ব্যবহার
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
    if (config) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(config)]);

  return { data, loading, error, refetch: fetchData, api };
};

export default useAxios;
