import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import useResizeDedector from "../../hooks/useResizeDedector";
import { BREAKPOINTS } from "../../utils/enums";

export default function Layout() {
  const screenSize = useResizeDedector();

  switch (screenSize) {
    case BREAKPOINTS.LG:
    case BREAKPOINTS.XL:
    case BREAKPOINTS.XXL:
      return (
        <Flex height={"100vh"}>
          <SideBar />
          <Box flex={1} bg={"whitesmoke"} width={"100%"}>
            <Outlet />
          </Box>
        </Flex>
      );
    case BREAKPOINTS.SM:
    case BREAKPOINTS.MD:
      return (
        <Flex height={"100vh"} direction={"column"}>
          <Header />
          <Box flex={1} height={"100%"} bg={"whitesmoke"}>
            <Outlet />
          </Box>
        </Flex>
      );
    default:
      return (
        <Flex height={"100vh"} justify={"center"} direction={"column"}>
          <MobileHeader />
          <Box bg={"whitesmoke"} width={"100vw"} height={"100%"}>
            <Outlet />
          </Box>
        </Flex>
      );
  }
}
