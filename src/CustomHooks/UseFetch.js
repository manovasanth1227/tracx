import { useState, useCallback } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, responseData) => {
    setLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: JSON.stringify(requestConfig.body) || null,
      });

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      let data = await response.json();
      if (data !== null) {
        responseData(data);
      } else {
        throw new Error("Response Not Found!");
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setLoading(false);
  }, []);

  return [loading, sendRequest, error];
};

export default useFetch;
