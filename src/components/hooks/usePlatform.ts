import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./useGames";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
