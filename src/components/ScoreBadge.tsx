import { Badge } from "@chakra-ui/react"

interface Props{
  score: number
}

function ScoreBadge({score} : Props) {
  const color = score > 60 ? 'green' : score > 40 ? 'orange' : score > 20 ? 'red' : ''

  return <Badge colorScheme={color} fontSize={15} borderRadius={4} paddingX={2}> {score} </Badge>
}

export default ScoreBadge