import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.timeout === 2000;

export const request = async (
  config: AxiosRequestConfig,
  apikey?: string,
): Promise<AxiosResponse> => {
  config.method = config.method || 'get';
  if (!!apikey) {
    config.headers = {
      'Content-Type': 'application/json',
      'X-MBX-APIKEY': apikey || '',
    };
  }

  return await axios(config);
};
