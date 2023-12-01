import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "38d8bf2791f74269bf804090176f9cf6",
    // genre: 
  },
});
