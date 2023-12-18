import { useQuery } from "@tanstack/react-query";
import detailsServices from "../../services/details-services";
import ms from "ms";
import { Game } from "../entities/Game";

const useGameDetails = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => detailsServices.getDetails(slug),
    staleTime: ms("24h"),
  });
};

export default useGameDetails;
