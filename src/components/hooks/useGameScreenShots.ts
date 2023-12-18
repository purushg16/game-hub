import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { Trailer } from "../entities/trailer";
import { ScreenShot } from "../entities/Screeshot";

const useGameScreenShots = (slug: string) => {
  const ssServices = new APIClient<ScreenShot>(`/games/${slug}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: ssServices.getAll,
  });
};

export default useGameScreenShots;
