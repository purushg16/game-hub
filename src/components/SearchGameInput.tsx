import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "./store/gameStore";

export const SearchGameInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search Games..."
          variant={"filled"}
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};
