import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import useGenres from "./hooks/useGenres";
import useGameStore from "./store/gameStore";

export default function GenreList() {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const setGenreId = useGameStore((s) => s.setGenreId);
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);

  return (
    <Box padding={3}>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>

      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                onClick={() => setGenreId(genre.id)}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
