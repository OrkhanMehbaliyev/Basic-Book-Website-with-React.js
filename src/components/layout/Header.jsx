import { Box, Center, HStack, Heading, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import BookIcon from "../../assets/icons/bookIcon.svg";
import CartDrawer from "../CartDrawer";

export default function Header() {
  return (
    <Box
      width={"100vw"}
      bg={"blue.700"}
      py={3}
      color={"white"}
      position={"fixed"}
      zIndex={10}
      top={0}
      left={0}
      display={"flex"}
    >
      <HStack spacing={1} flex={1}>
        <Image src={BookIcon} w={"40px"} h={"40px"} />
        <Heading fontSize={25}>BookStore </Heading>
      </HStack>
      <Center flex={9}>
        <HStack>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/books"}>Books</NavLink>
          <NavLink to={"/authors"}>Authors</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </HStack>
      </Center>
      <Box me={3}>
        <CartDrawer />
      </Box>
    </Box>
  );
}
