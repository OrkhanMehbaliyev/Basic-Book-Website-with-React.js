import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import useMediaQueries from "../../hooks/useMediaQueries";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default function Layout() {
  const { sm, md, lg, xl, xxl } = useMediaQueries();

  // if (base) console.log("base");

  if (lg || xl || xxl) {
    return (
      <Flex height={"100vh"}>
        <SideBar />
        <Box flex={1} bg={"whitesmoke"} width={"100%"}>
          <Outlet />
        </Box>
      </Flex>
    );
  }

  if (md || sm) {
    return (
      <Flex height={"100vh"} direction={"column"}>
        <Header />
        <Box flex={1} height={"100%"} bg={"whitesmoke"}>
          <Outlet />
        </Box>
      </Flex>
    );
  }

  return (
    <Flex height={"100vh"} justify={"center"} direction={"column"}>
      <MobileHeader />
      <Box bg={"whitesmoke"} width={"100vw"} height={"100%"}>
        <Outlet />
      </Box>
    </Flex>
  );
}
