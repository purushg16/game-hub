import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";
import genreServices from "../../services/genre-services";
import { CACHE_GENRES_KEY } from "../constants";
import genre from "../Data/genre";
import { FetchResponse } from "../../services/api-client";
import ms from "ms";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_GENRES_KEY,
    queryFn: genreServices.getAll,
    staleTime: ms("24h"), // 24hrs
    initialData: genre,
  });
};

export default useGenres;
