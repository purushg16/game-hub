import { Image } from "@chakra-ui/image";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import useGameScreenShots from "./hooks/useGameScreenShots";
import { Skeleton } from "@chakra-ui/skeleton";

interface Props {
  slug: string;
}

const ScreenShotGrid = ({ slug }: Props) => {
  const { data, isLoading, error } = useGameScreenShots(slug);

  if (!data) return null;
  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={[1, 2, 2]} spacing={2} marginY={5}>
      {data.results.map((img) => (
        <Image src={img.image} alt="" />
      ))}
    </SimpleGrid>
  );
};

export default ScreenShotGrid;
