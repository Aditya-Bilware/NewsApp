import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchNews = async (url = "/search?q=Google") => {
    setLoading(true);
    try {
      const response = await api.get(
        `${url}&token=${import.meta.env.VITE_GNEWS_API_KEY}`,
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
    setLoading,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
