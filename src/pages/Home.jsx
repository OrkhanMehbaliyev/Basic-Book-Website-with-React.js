import { Box, Button, Heading } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={7}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading color={"blue.700"} fontSize={"50px"} textAlign={"center"}>
        Welcome to BookStore
      </Heading>
      <NavLink to={"/books"}>
        <Button colorScheme="blue" variant="solid">
          Explore our book base
        </Button>
      </NavLink>
    </Box>
  );
}
