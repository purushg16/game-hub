import { Box, Heading } from "@chakra-ui/layout";
import useGameDetails from "../hooks/useGameDetails";
import { useParams } from "react-router";
import { Spinner } from "@chakra-ui/spinner";
import ExpandableText from "../ExpandableText";

const GameDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <Box>
      <Heading>{data.name}</Heading>
      <ExpandableText text={data.description_raw} />
    </Box>
  );
};

export default GameDetailsPage;
