import { Box } from '@chakra-ui/react'
import * as React from 'react'

import { Home } from '../components/_index'
import {
  BlurBlobOne,
  BlurBlobTwo,
  BlurBlobThree,
} from '../components/flare/blur-blobs'

const Flare = () => (
  <Box
    position="absolute"
    top="0%"
    zIndex="-1"
    left="0%"
    height="100%"
    width="100%"
    overflow="hidden"
    // bgGradient="linear(to-br, brand.zero, brand.two)"
  >
    <Box position="relative" height="100%" width="100%" opacity="0.7">
      <Box pos="absolute" className="home-blob-one" right="0px" top="0px">
        <BlurBlobOne />
      </Box>{' '}
      <Box pos="absolute" left="0px" bottom="0px" className="home-blob-two">
        <BlurBlobTwo />
      </Box>{' '}
      <Box pos="absolute" left="0px" top="0px" className="home-blob-two">
        <BlurBlobThree />
      </Box>
    </Box>
  </Box>
)

const IndexPage = () => {
  return (
    <Box position="relative" zIndex="0">
      <Home />
      <Flare />
    </Box>
  )
}

export default IndexPage
