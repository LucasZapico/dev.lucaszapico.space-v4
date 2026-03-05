import { Link as GatsbyLink } from "gatsby"
import React, { useState } from "react"
import { generate } from "shortid"
import {
  Flex,
  useColorMode,
  Box,
  Container,
  Link,
  IconButton,
  Fade,
  ScaleFade,
  useDisclosure,
  Show,
} from "@chakra-ui/react"
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons"

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
  { name: "Notes", path: "/notes" },
  { name: "About", path: "/about" },
]

export const ScrollToTop = () => (
  <Flex gap={0} alignItems="center">
    <IconButton
      size="xs"
      bg="transparent"
      aria-label="scroll to top"
      icon={<ArrowUpIcon />}
      onClick={() => window.scrollTo(0, 0)}
    />
    <IconButton
      size="xs"
      bg="transparent"
      aria-label="scroll to bottom"
      icon={<ArrowDownIcon />}
      onClick={() => window.scrollTo(0, 9999)}
    />
  </Flex>
)

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      size="xs"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      bg="transparent"
      onClick={toggleColorMode}
    />
  )
}

const DesktopNav = () => {
  const { colorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()

  const routesOne = ROUTES.slice(0, 2)
  const routesTwo = ROUTES.slice(2)

  return (
    <Container
      className={colorMode === "dark" ? "glass dark" : "glass light"}
      bg={colorMode === "dark" ? "gray.900" : "white"}
      maxW="container.xl"
    >
      <Flex py={2} alignItems="center" justifyContent="space-between">
        <ScrollToTop />

        <Flex alignItems="center" gap={0}>
          {routesOne.map((r) => (
            <Link
              activeClassName="active"
              fontSize="xs"
              variant="navLink"
              key={generate()}
              as={GatsbyLink}
              to={r.path}
            >
              {r.name}
            </Link>
          ))}
          <Show above="md">
            {routesTwo.map((r) => (
              <Link
                activeClassName="active"
                fontSize="xs"
                variant="navLink"
                key={generate()}
                as={GatsbyLink}
                to={r.path}
              >
                {r.name}
              </Link>
            ))}
          </Show>
        </Flex>

        <Flex alignItems="center" gap={0}>
          <Box position="relative" display={{ base: "block", md: "none" }}>
            {isOpen ? (
              <Fade in={isOpen}>
                <IconButton
                  size="xs"
                  aria-label="menu close"
                  bg="transparent"
                  onClick={onToggle}
                  icon={<CloseIcon boxSize="0.6rem" />}
                />
              </Fade>
            ) : (
              <Fade in={!isOpen}>
                <IconButton
                  size="xs"
                  aria-label="menu open"
                  bg="transparent"
                  onClick={onToggle}
                  icon={<HamburgerIcon />}
                />
              </Fade>
            )}
            {isOpen && (
              <ScaleFade initialScale={0.8} in={isOpen}>
                <Flex
                  bg={colorMode === "dark" ? "gray.900" : "white"}
                  className={colorMode === "dark" ? "glass dark" : "glass light"}
                  position="absolute"
                  right={0}
                  bottom="100%"
                  mb={2}
                  px={3}
                  py={2}
                  flexDir="column"
                  borderRadius="sm"
                  minW="120px"
                >
                  {routesTwo.map((r) => (
                    <Link
                      onClick={onToggle}
                      activeClassName="active"
                      fontSize="xs"
                      variant="navLink"
                      key={generate()}
                      as={GatsbyLink}
                      to={r.path}
                    >
                      {r.name}
                    </Link>
                  ))}
                </Flex>
              </ScaleFade>
            )}
          </Box>
          <DarkModeSwitch />
        </Flex>
      </Flex>
    </Container>
  )
}

const Nav = () => (
  <Box zIndex="99" width="100%">
    <DesktopNav />
  </Box>
)

export const NavContainer = () => (
  <Box
    width="100%"
    zIndex={10}
    as="header"
    position="fixed"
    bottom="5"
    left="0"
  >
    <Nav />
  </Box>
)

export default Nav
