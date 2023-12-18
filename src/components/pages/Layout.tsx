import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import { Box } from "@chakra-ui/layout";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
