import React, { useEffect } from "react"
import { Box, useTheme, useColorMode } from "@chakra-ui/react"
import Helmet from "react-helmet"

import { Header, Footer, SEO, ResponsiveHelper } from "components"
import Nav from "components/base/nav/nav"
import { NavContainer } from "../nav/nav"



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

  return (
    <Box pb={20}>
      <SEO location={location} />
      <TypeImports />
      <Header location={location} />
      <ResponsiveHelper/>
      <Box>{children}</Box>
      {/* <ScrollToTop /> */}
      <NavContainer/>
      <Footer location={location} />
    </Box>
  )
}

export default Layout
