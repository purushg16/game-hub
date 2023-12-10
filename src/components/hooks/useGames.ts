import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import { Game } from "../../services/game-services";
import gameServices from "../../services/game-services";
import { FetchResponse } from "../../services/api-client";

const useGames = (gameQuery: GameQuery | null) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gameServices.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
  });
};

export default useGames;
