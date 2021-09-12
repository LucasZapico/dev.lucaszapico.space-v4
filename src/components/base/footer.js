import { Box, Flex, Heading, Text, Divider, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import PropTypes from 'prop-types'

import { generate } from 'shortid'
import moment from 'moment'
import { GatsbyImage } from 'gatsby-plugin-image'
import Logo from '../../assets/mark.svg'
import { LinkEmail, LinkOne, LinkPhone } from '../_index'

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
    name: 'Projects',
    path: '/projects',
  },
  // {
  //   name: 'Playground',
  //   path: '/playground',
  // },
  {
    name: 'Style Guide',
    path: '/styleguide',
  },
  {
    name: 'Site Credits',
    path: '/site-credits',
  },
]

const Footer = ({ title, description, location }) => {
  const { pathname } = location
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    baseUrl,
    contactEmail,
    defaultImage,
    phone,
    address,
  } = site.siteMetadata

  const data = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <footer>
      <Box background="" py={10}>
        <Divider />
        <Box>
          <Flex
            minHeight="100%"
            flexDirection={{
              base: 'row',

              md: 'row',
            }}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box
              // flexGrow="1"
              flexBasis={{ base: '40%', md: 'auto' }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                px={{ base: 2, sm: 6 }}
                pt={{ base: 10, md: 20 }}
              >
                <Heading as="h4" size="md" mb={6} variant="sec">
                  Links
                </Heading>

                <Flex flexDirection="column" mr={4}>
                  {ROUTES.map((l, i) => (
                    <LinkOne
                      activeClassName="active"
                      mb={4}
                      // variant="linkOne"
                      fontSize="sm"
                      key={generate()}
                      as={GatsbyLink}
                      to={l.path}
                    >
                      {' '}
                      {l.name}{' '}
                    </LinkOne>
                  ))}
                </Flex>
              </Box>
            </Box>
            <Box flexGrow="1" flexBasis={{ base: '100%', md: 'auto' }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                px={{ base: 2, sm: 6 }}
                pt={{ base: 10, md: 20 }}
              >
                <Heading as="h4" size="md" mb={6} variant="sec">
                  Contact
                </Heading>
                {/* <Box>
                  <Link to="/">
                    <Logo style={{ width: '200px', height: '80px' }} />
                  </Link>
                </Box> */}
                <Heading as="h4" size="sm" mb={2}>
                  <LinkEmail>{contactEmail}</LinkEmail>
                </Heading>
                <LinkPhone>{phone}</LinkPhone>
              </Box>
            </Box>

            <Box flexGrow="1" flexBasis={{ base: '100%', md: 'auto' }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                px={{ base: 2, sm: 6 }}
                pt={{ base: 10, md: 20 }}
              >
                <Heading as="h4" size="md" mb={6} variant="sec">
                  Location
                </Heading>
                <Heading as="h5" size="sm">
                  🌎 {address}
                </Heading>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Footer.defaultProps = {
  title: null,
  description: null,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        baseUrl
        contactEmail
        address
        defaultImage: image
        phone
      }
    }
  }
`

export default Footer
