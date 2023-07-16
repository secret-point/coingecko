import axios from 'axios';

import {ENV} from './env';
import {QueryKey} from '@tanstack/query-core';
import {ErrorResponse} from '../utils/utils';

const instance = axios.create({
  baseURL: ENV.API_URL,
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  resp => {
    return resp.data;
  },
  err => {
    if (!!err.response && !!err.response.data) {
      const errorResponse = new ErrorResponse(err.response.data);

      return Promise.reject(errorResponse);
    }

    return Promise.reject(err);
  },
);

export const queryClientAxios = async ({queryKey}: {queryKey: QueryKey}) => {
  const query = Array.from(queryKey);
  const params = query.length === 1 ? {} : query.pop();
  return instance.get(query.join('/'), {
    params,
  });
};

export default instance;
