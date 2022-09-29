import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { generate } from 'shortid'
import { useSpring, animated as a } from 'react-spring'
import { Box, Container, Button, Link } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useWindowSize } from '../../../hooks'
import MobileNav from './mobile-nav'

const ROUTES = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
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
    name: 'About',
    path: '/about',
  },

  // {
  //   name: 'Playground',
  //   path: '/playground',
  // },
]

const DesktopNav = () => {
  return (
    <Container maxW="container.xl" display={{ base: 'none', lg: 'block' }}>
      <Box
        display="flex"
        py={4}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        {ROUTES.map((r, i) => (
          <Link
            activeClassName="active"
            fontSize="xl"
            mb={6}
            variant="linkOne"
            key={generate()}
            as={GatsbyLink}
            to={r.path}
          >
            {r.name}
          </Link>
        ))}
      </Box>
    </Container>
  )
}

const nav = () => {
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
    <Box zIndex="99" width="100%" height="4rem">
      <Box
        position="fixed"
        top="0"
        left="0"
        p={2}
        as={Button}
        zIndex={show ? 0 : 10}
        onClick={() => {
          console.log('click')
          setShow(true)
        }}
        display={{ base: 'block', lg: 'none' }}
        variant="none"
      >
        <HamburgerIcon boxSize="1.5rem" />
      </Box>
      <DesktopNav />
      {size.width < 900 && (
        <MobileNav size={size} setShow={setShow} show={show} ROUTES={ROUTES} />
      )}
    </Box>
  )
}

export default nav
