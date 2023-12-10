import { useQuery } from "@tanstack/react-query";
import { Genre } from "../../services/genre-services";
import genreServices from "../../services/genre-services";
import { CACHE_GENRES_KEY } from "../constants";
import genre from "../Data/genre";
import { FetchResponse } from "../../services/api-client";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_GENRES_KEY,
    queryFn: genreServices.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    // initialData: { count: genre.count, results: genre.results }
  });
};

export default useGenres;
