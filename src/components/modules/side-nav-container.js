import { Text, Box, useColorMode } from "@chakra-ui/react";
import React from "react";
// import { navHeight } from "src/components/organisms/Nav";
import { generate } from "shortid";


const navHeight="4rem"

const SideNav = ({ elements }) => {
  return (
    <Box>
      {elements &&
        elements.map((el) => {
          return <Box key={generate()}>{el}</Box>;
        })}
    </Box>
  );
};


const SideNavContainer = ({children, ...rest}) => {
  const { colorMode } = useColorMode();
  const arr = Array.from({length: 100}, (x,i) => i)
  return (
    <Box
      {...rest}
      display={{ base: "none", md: "flex" }}
      className="side-nav"
      overflowY="scroll"
      position="sticky"
      top={navHeight}
      // top="0px"
      left="0px"
      minW="15rem"
      px={4}
      height={`calc(100vh - ${navHeight})`}
    >
      {children}
      {/* <SideNav elements={arr}/> */}
    </Box>
  );
};

export default SideNavContainer;
