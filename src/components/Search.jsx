import { Box, Center, Input } from "@chakra-ui/react";
import BookContext from "../utils/context";
import { useContext, useEffect, useState } from "react";

export default function Search() {
  const { input, setInput } = useContext(BookContext);

  return (
    <Box h={"20vh"}>
      <Center margin={"100px"} display={"flex"} gap={1}>
        <Input
          w={"500px"}
          border={"1px solid #3c8df3"}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </Center>
    </Box>
  );
}
