import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { Trailer } from "../entities/trailer";

const useGameTrailer = (slug: string) => {
  const trailerServices = new APIClient<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: trailerServices.getAll,
  });
};

export default useGameTrailer;
