import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "./hooks/useGenres";
import usePlatforms from "./hooks/usePlatform";
import useSelector from "./hooks/useSelector";

interface Props {
  gameQuery: GameQuery;
  selectedGenreID?: number;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const { data: genreData } = useGenres();
  const { data: PlatformData } = usePlatforms();

  const selectedGenre = useSelector(genreData, gameQuery.genreID)
  const selectedPlatform = useSelector(PlatformData, gameQuery.platformID)

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
