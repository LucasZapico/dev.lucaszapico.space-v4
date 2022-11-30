import React, { useEffect, useState } from "react"
import { generate } from "shortid"
import { useSpring, animated as a } from "react-spring"
import { Box, Container, Button, Link } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Link as GatsbyLink } from "gatsby"

const MobileNav = ({ show, setShow, size, ROUTES }) => {
  const styles = useSpring({
    zIndex: 4,
    backgroundColor: "#000000",
    opacity: show ? 1 : 0,
    overflow: "hidden",
    height: show ? "100vh" : "0vh",
    position: "fixed",
    width: "100%",
    top: "0px",
    left: "0px",
  })
  useEffect(() => {}, [show])

  useEffect(() => {
    if (size.width > 990) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [size])
  return (
    <a.div style={styles}>
      <Box zIndex={show ? 10 : 0}>
        <Box
          position="fixed"
          top="0"
          p={2}
          as={Button}
          variant="none"
          display={{ base: "block", lg: "none" }}
        >
          <CloseIcon onClick={() => setShow(false)} />
        </Box>

        <Container maxW="container.xl">
          <Box
            display="flex"
            py={10}
            justifyContent="space-between"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            height={{ base: "100%", lg: "auto" }}
          >
            {ROUTES.map((r, i) => (
              <Link
                activeClassName="active"
                fontSize="xl"
                mb={6}
                variant="linkOne"
                width={{ base: "300px", lg: "auto" }}
                onClick={() => setShow(false)}
                onKeyDown={() => setShow(false)}
                key={generate()}
                as={GatsbyLink}
                to={r.path}
              >
                {r.name}
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
    </a.div>
  )
}

export default MobileNav
