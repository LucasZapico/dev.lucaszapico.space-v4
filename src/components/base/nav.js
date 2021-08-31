import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { generate } from 'shortid'
import { useSpring, animated as a } from 'react-spring'
import { Box, Container, Button, useColorMode } from '@chakra-ui/react'
import { LinkOne } from '../_index'

const ROUTES = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
  {
    name: 'Notes',
    path: '/notes',
  },
  {
    name: 'Cases',
    path: '/cases',
  },
  {
    name: 'Playground',
    path: '/playground',
  },
]

const nav = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(true)
  const styles = useSpring({
    zIndex: '10',
    opacity: show ? 1 : 0,
    height: show ? '10vh' : '0vh',
    position: 'fixed',
    width: '100%',
    top: '0px',
    left: '0px',
  })

  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <a.div style={styles}>
      <Container maxW="container.xl">
        <Box display="flex" py={10} justifyContent="space-between">
          {ROUTES.map((r, i) => (
            <LinkOne
              activeClassName="active"
              fontSize="xl"
              variant="linkOne"
              // onClick={() => setShow(false)}
              // onKeyDown={() => setShow(false)}
              key={generate()}
              as={GatsbyLink}
              to={r.path}
            >
              {r.name}
            </LinkOne>
          ))}
          {/* <Button onClick={toggleColorMode}>
            Toggle
            {' '}
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button> */}
        </Box>
      </Container>
    </a.div>
  )
}

export default nav
