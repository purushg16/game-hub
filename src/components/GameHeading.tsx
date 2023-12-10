import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "./hooks/useGenres";
import usePlatforms from "./hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
  selectedGenreID?: number;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const { data: genreData } = useGenres();
  const { data: PlatformData } = usePlatforms();
  
  const selectedGenre = genreData?.results.find(
    (genre) => genre.id === gameQuery.genreID
  );

  const selectedPlatform = PlatformData?.results.find(
    (platform) => platform.id === gameQuery.platformID
  );

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
