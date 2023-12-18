import { Box, Heading, Text } from "@chakra-ui/layout";
import { isRouteErrorResponse, useRouteError } from "react-router";
import NavBar from "../NavBar";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading> Oops </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page does not exist!"
            : "The unexpected error occured!"}
        </Text>
      </Box>
    </>
  );
};
