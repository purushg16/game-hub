import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router";
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../GameTrailer";
import ScreenShotGrid from "../ScreenShotGrid";

const GameDetailsPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer slug={game.slug} />
        <ScreenShotGrid slug={game.slug} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
