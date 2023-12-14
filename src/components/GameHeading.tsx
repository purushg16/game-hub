import { Heading } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import usePlatforms from "./hooks/usePlatform";
import useSelector from "./hooks/useSelector";
import useGameStore from "./store/gameStore";

export const GameHeading = () => {
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const platformId = useGameStore((s) => s.gameQuery.platformId);

  const { data: genreData } = useGenres();
  const { data: PlatformData } = usePlatforms();

  const selectedGenre = useSelector(genreData, genreId);
  const selectedPlatform = useSelector(PlatformData, platformId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={5}>
      {" "}
      {heading}{" "}
    </Heading>
  );
};
