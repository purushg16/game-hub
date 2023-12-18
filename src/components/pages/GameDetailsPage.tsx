import { Box, Heading, Text } from "@chakra-ui/layout";
import useGameDetails from "../hooks/useGameDetails";
import { useParams } from "react-router";
import { Spinner } from "@chakra-ui/spinner";

const GameDetailsPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <Box>
      <Heading>{data.name}</Heading>
      <Text> {data.description_raw} </Text>
    </Box>
  );
};

export default GameDetailsPage;
