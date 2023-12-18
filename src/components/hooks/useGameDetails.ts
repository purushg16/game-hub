import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../../services/api-client";
import detailsServices, { GameDeatils } from "../../services/details-services";
import ms from "ms";

const useGameDetails = (slug: string) => {
  return useQuery<GameDeatils, Error>({
    queryKey: ["games", slug],
    queryFn: () => detailsServices.getDetails("/" + slug),
    staleTime: ms("24h"),
  });
};

export default useGameDetails;
