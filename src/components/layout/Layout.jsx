import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <Flex height={"100vh"}>
      <SideBar />
      <Box flex={1} bg={"whitesmoke"}>
        <Outlet />
      </Box>
    </Flex>
  );
}
