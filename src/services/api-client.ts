import axios from "axios";

export interface FetchResponse<T> {
  count: number;
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
  getAll = (params?: {}) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { params: params })
      .then((res) => res.data);
  };
}
