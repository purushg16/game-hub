import { Box, Heading } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router";
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailsPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} />
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailsPage;
