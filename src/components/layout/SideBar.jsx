import { Box, Center, HStack, Heading, Image, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import BookIcon from "../../assets/icons/bookIcon.svg";

export default function SideBar() {
  return (
    <Box
      w={["200px", "200px", "230px", "260px", "300px", "350px"]}
      h={"100vh"}
      bg={"blue.700"}
      color={"white"}
      p={4}
    >
      <HStack mb={10}>
        <Image src={BookIcon} w={"50px"} h={"50px"} />
        <Heading fontSize={[15, 20, 25, 30, 40]}>BookStore </Heading>
      </HStack>
      <Center textAlign={"center"}>
        <Stack direction={"column"} spacing={4} fontSize={[14, 14, 16, 20]}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/books"}>Books</NavLink>
          <NavLink to={"/authors"}>Authors</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </Stack>
      </Center>
    </Box>
  );
}
