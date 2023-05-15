/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import {apiKey} from '../Utils/constant';

const useFetch = (url: string, params = {}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const get = () => {
    setIsLoading(true);
    axios
      .get(url, {
        params: {lang: 'id', appid: apiKey, ...params},
      })
      .then(response => {
        setData(response?.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    get();
  }, [url, params]);

  return [data, isLoading];
};

export default useFetch;
