import { HStack, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react"

export default function GenreSkeleton(){
    
    return (
        <SimpleGrid display={'flex'} flexDirection='row' gap={2} marginTop={5}>
            <Skeleton width='50px' height='32px' borderRadius={8}/>
            <Skeleton width='160px' height='32px' borderRadius={8} />
        </SimpleGrid>
    )
}