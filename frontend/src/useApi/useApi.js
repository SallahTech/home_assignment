// useApi.js
import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [messageContent, setMessageContent] = useState(null);

  const fetchData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    if (data) {
      setMessageContent(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, messageContent };
};

export default useApi;
