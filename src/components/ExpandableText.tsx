import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  if (!text) return null;

  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  const substring = expanded ? text : text.substring(0, limit) + "...";

  return (
    <Text>
      {substring}
      <Button
        marginLeft={1}
        size="xs"
        colorScheme="orange"
        onClick={() => setExpanded(!expanded)}
      >
        {" "}
        {expanded ? "Show Less" : "Read More"}{" "}
      </Button>
    </Text>
  );
};

export default ExpandableText;
