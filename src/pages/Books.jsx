import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Books() {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      overflowY={"auto"}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Outlet />
    </Box>
  );
}
