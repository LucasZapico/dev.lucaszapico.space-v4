import React, { useEffect } from 'react';
import { Box, useTheme, useColorMode } from '@chakra-ui/react';
import Helmet from 'react-helmet';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Header, Footer, Nav } from '../_index';

const ScrollToTop = () => (
  <Box
    pos="fixed"
    cursor="pointer"
    backgroundColor="white"
    opacity=".7"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bottom="2rem"
    borderRadius="100%"
    right="2rem"
    width="50px"
    height="50px"
    onClick={() => {
      window.scrollTo(0, 0);
    }}
  >
    <ArrowUpIcon style={{ height: '2rem', width: '2rem' }} />
  </Box>
);

const TypeImports = () => (
  <Helmet>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

const Layout = ({ location, children }) => {
  const theme = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <Box py={20}>
      <TypeImports />
      <Nav />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
