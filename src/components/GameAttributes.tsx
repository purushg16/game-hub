import { SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import DefinitionItem from "./DefinitionItem";
import ScoreBadge from "./ScoreBadge";
import { Game } from "./entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} marginY={10} rowGap={10}>
      <DefinitionItem
        title="Platforms"
        children={game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}> {platform.name} </Text>
        ))}
      />
      <DefinitionItem title="Metascore">
        <ScoreBadge score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem
        title="Genre"
        children={game.genres.map((genre) => (
          <Text> {genre.name} </Text>
        ))}
      />
      <DefinitionItem
        title="Publisher"
        children={game.publishers.map((publisher) => (
          <Text> {publisher.name} </Text>
        ))}
      />
    </SimpleGrid>
  );
};

export default GameAttributes;
