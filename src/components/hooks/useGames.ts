import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import { Game } from "../../services/game-services";
import gameServices from "../../services/game-services";
import { FetchResponse } from "../../services/api-client";

const useGames = (gameQuery: GameQuery | null) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      gameServices.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          page: pageParam,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
    getNextPageParam : (lastPage, allPages) => 
      lastPage.next ? allPages.length + 1 : undefined
  });
};

export default useGames;
