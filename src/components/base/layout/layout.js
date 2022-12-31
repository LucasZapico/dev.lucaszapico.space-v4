import React, { useEffect } from "react"
import { Box, useTheme, useColorMode } from "@chakra-ui/react"
import Helmet from "react-helmet"
import { ArrowUpIcon, ArrowDownIcon  } from "@chakra-ui/icons"
import { Header, Footer, SEO, ResponsiveHelper } from "components"

const ScrollToTop = () => (
  <Box
    pos="fixed"
    cursor="pointer"
    backgroundColor="gray.300"
    opacity=".7"
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    bottom="2rem"
    borderRadius="md"
    right="2rem"
    width="50px"
    
    
  >
    <ArrowUpIcon 
    onClick={() => {
      window.scrollTo(0, 0)
    }}
    style={{ height: "2rem", width: "2rem" }} />
    <ArrowDownIcon 
    onClick={() => {
      window.scrollTo(0, 9999)
    }}
    style={{ height: "2rem", width: "2rem" }} />
  </Box>
)

const TypeImports = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

const Layout = ({ location, children, pageContext }) => {
  console.log(pageContext)
  return (
    <Box pb={20}>
      <SEO location={location} />
      <TypeImports />
      <Header location={location} />
      <ResponsiveHelper/>
      <Box>{children}</Box>
      <ScrollToTop />
      <Footer location={location} />
    </Box>
  )
}

export default Layout
