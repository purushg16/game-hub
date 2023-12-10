import { useQuery } from "@tanstack/react-query";
import { CACHE_PLATFORMS_KEY } from "../constants";
import platformServices, { Platform } from "../../services/platform-services";
import { FetchResponse } from "../../services/api-client";

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
      queryKey: CACHE_PLATFORMS_KEY,
      queryFn: platformServices.getAll,
      staleTime: 24 * 60 * 60 * 1000, // 24hrs
    //   initialData: { count: platforms, results: genre.results }
    });
};

export default usePlatforms;
