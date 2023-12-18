import { useQuery } from "@tanstack/react-query";
import { CACHE_PLATFORMS_KEY } from "../constants";
import platformServices from "../../services/platform-services";
import { Platform } from "../entities/Platform";
import { FetchResponse } from "../../services/api-client";
import platforms from "../Data/platforms";
import ms from "ms";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_PLATFORMS_KEY,
    queryFn: platformServices.getAll,
    staleTime: ms("24h"), // 24hrs
    initialData: platforms,
  });
};

export default usePlatforms;
