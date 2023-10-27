import axios, { AxiosRequestConfig } from 'axios';
import { FetchResponse } from '../interfaces';

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '99d73ef3545547fbb7f6f775f1eb0967'
  }
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(config?: AxiosRequestConfig) {
    const response = await axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config);
    return response.data;
  }

  async get(id: number | string) {
    const response = await axiosInstance
      .get<T>(`${this.endpoint}/${id}`);
    return response.data;
  }
}

export default APIClient;
