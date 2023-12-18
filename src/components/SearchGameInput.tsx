import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "./store/gameStore";
import { useNavigate } from "react-router";

export const SearchGameInput = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
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
