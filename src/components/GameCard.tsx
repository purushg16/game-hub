import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import placholder from "../assets/placeholder.png"
import { Emojis } from "./Emojis";
import { Game } from "../services/game-services";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {

  return (
    <Card>
      <Image src={game.background_image || placholder} />
      <CardBody padding={5}>
        <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformIconList platforms={ game.parent_platforms.map(({platform}) => platform )} />
            <ScoreBadge score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}> {game.name} <Emojis rating={game.rating_top} /> </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
