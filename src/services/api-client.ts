import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "38d8bf2791f74269bf804090176f9cf6",
  },
});

export default class APIClient<T> {
  // class attributes
  endpoint: string;

  // constructor
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // class methods
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getDetails = (slug: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + slug)
      .then((res) => res.data);
  };
}
