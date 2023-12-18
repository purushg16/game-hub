import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import gameServices from "../../services/game-services";
import { FetchResponse } from "../../services/api-client";
import ms from "ms";
import useGameStore from "../store/gameStore";

const useGames = () => {
  const { gameQuery } = useGameStore();

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameServices.getAll({
        params: {
          genres: gameQuery?.genreId,
          page: pageParam,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms("24h"), //24h
  });
};

export default useGames;
