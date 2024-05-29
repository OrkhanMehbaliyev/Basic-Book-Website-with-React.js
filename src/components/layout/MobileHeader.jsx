import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  VStack,
  useDisclosure,
  Image,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import BookIcon from "../../assets/icons/bookIcon.svg";
import { NavLink } from "react-router-dom";
import CartDrawer from "../CartDrawer";

const MobileNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="blue.700"
      color="white"
      px={4}
      position={"fixed"}
      left={0}
      top={0}
      zIndex={1}
      width={"100vw"}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={1}>
          <Image src={BookIcon} w={"50px"} h={"50px"} />
          <Heading fontSize={[15, 20, 25, 30, 40]}>BookStore </Heading>
        </HStack>
        <IconButton
          size="md"
          icon={
            isOpen ? (
              <CloseIcon color={"blue.700"} />
            ) : (
              <HamburgerIcon color={"blue.700"} />
            )
          }
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          display={{ md: "none" }}
          onClick={onToggle}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: "none" }}>
          <VStack as="nav" spacing={4}>
            <Box onClick={onToggle}>
              <NavLink to={"/"}>Home</NavLink>
            </Box>
            <Box onClick={onToggle}>
              <NavLink to={"/books"}>Books</NavLink>
            </Box>
            <Box onClick={onToggle}>
              <NavLink to={"/authors"}>Authors</NavLink>
            </Box>
            <Box onClick={onToggle}>
              <NavLink to={"/contact"}>Contact</NavLink>
            </Box>
            <Box onClick={onToggle}>
              <CartDrawer />
            </Box>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MobileNavbar;
