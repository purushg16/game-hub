import { Box, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenres";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./components/hooks/useGames";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=> { setGameQuery({...gameQuery, searchText}) } } />
      </GridItem>
      
      <GridItem area="aside" paddingX={5}>
        <GenreList onSelect={(genre)=> { setGameQuery({...gameQuery, genre}) }} selectedGenre={gameQuery.genre}/>
      </GridItem>
      
      <GridItem area="main">
          <Box padding={5}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5}>
              <PlatformSelector onSelect = {(platform) => setGameQuery({...gameQuery, platform})} /> 
              <SortSelector onSelectOrder={ (sortOrder) => setGameQuery({...gameQuery, sortOrder}) } orderValue={gameQuery.sortOrder}/>
            </HStack>
            <GameGrid gameQuery={gameQuery}/>
          </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
