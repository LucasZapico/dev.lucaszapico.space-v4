import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { generate } from "shortid"
import { useSpring, animated as a } from "react-spring"
import {
  useColorMode,
  Box,
  Container,
  Button,
  Link,
  IconButton,
} from "@chakra-ui/react"
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons"
import { useWindowSize } from "../../../hooks"
import MobileNav from "./mobile-nav"

const ROUTES = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "Notes",
    path: "/notes",
  },
  {
    name: "About",
    path: "/about",
  },

  // {
  //   name: 'Playground',
  //   path: '/playground',
  // },
]

export const ScrollToTop = () => (
  <Box
    cursor="pointer"
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    borderRadius="md"
    width="2rem"
  >
    <IconButton
      size="sm"
      bg="transparent"
      //  style={{ height: "1rem", width: "1rem" }}
      aria-label="scroll to top"
      icon={<ArrowUpIcon />}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    />
    <IconButton
      size="sm"
      bg="transparent"
      aria-label="scroll to bottom"
      icon={<ArrowDownIcon />}
      onClick={() => {
        window.scrollTo(0, 9999)
      }}
    />
  </Box>
)

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      bg="transparent"
      onClick={toggleColorMode}
    />
  )
}

const DesktopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container
      className={colorMode === "dark" ? "glass dark" : "glass light"}
      bg={colorMode === "dark" ? "gray.900" : "white"}
      maxW="container.xl"
      display={{ base: "block", lg: "block" }}
    >
      <Box
        display="flex"
        py={4}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <ScrollToTop />
        {ROUTES.map((r, i) => (
          <Link
            activeClassName="active"
            fontSize={{ base: "sm", md: "md", lg: "xl" }}
            variant="navLink"
            key={generate()}
            as={GatsbyLink}
            to={r.path}
          >
            {r.name}
          </Link>
        ))}
        <DarkModeSwitch />
      </Box>
    </Container>
  )
}

const Nav = () => {
  const size = useWindowSize()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (size.width > 990) {
      setShow(false)
    } else {
      setShow(false)
    }
  }, [size])

  return (
    <Box zIndex="99" width="100%">
      {/* <Box
        position="fixed"
        top="0"
        left="0"
        p={2}
        as={Button}
        zIndex={show ? 0 : 10}
        onClick={() => {
          setShow(true)
        }}
        display={{ base: "block", lg: "none" }}
        variant="none"
      >
        <HamburgerIcon boxSize="1.5rem" />
      </Box> */}
      <DesktopNav />
      {/* {size.width < 900 && (
        <MobileNav size={size} setShow={setShow} show={show} ROUTES={ROUTES} />
      )} */}
    </Box>
  )
}

export const NavContainer = () => {
  const { colorMode } = useColorMode()
  return (
    <Box width="100%" zIndex={10} as="header" position="fixed" bottom="5" left="0">
      <Nav />
    </Box>
  )
}

export default Nav
