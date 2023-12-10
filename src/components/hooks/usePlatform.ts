import { useQuery } from "@tanstack/react-query";
import { CACHE_PLATFORMS_KEY } from "../constants";
import platformServices, { Platform } from "../../services/platform-services";
import { FetchResponse } from "../../services/api-client";
import platforms from "../Data/platforms";
import ms from "ms";

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
      queryKey: CACHE_PLATFORMS_KEY,
      queryFn: platformServices.getAll,
      staleTime: ms('24h'), // 24hrs
      initialData: platforms
    });
};

export default usePlatforms;
