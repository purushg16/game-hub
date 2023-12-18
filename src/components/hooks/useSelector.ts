import { FetchResponse } from "../../services/api-client";
import { Genre } from "../entities/Genre";
import { Platform } from "../entities/Platform";

const useSelector = (data?: FetchResponse<Platform | Genre>, id?: number) => {
  return data?.results.find((platform) => platform.id === id);
};

export default useSelector;
