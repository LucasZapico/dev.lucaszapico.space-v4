import React from 'react'
import { Box } from '@chakra-ui/react'

export const Tag = ({ children, ...rest }) => {
  const value = children.toLowerCase().replaceAll(' ', '-')
  const colorMode = 'dark'
  return (
    <Box
      {...rest}
      border="2px"
      padding={1}
      display="inline"
      mr={1}
      color={colorMode === 'light' ? 'brand.two' : 'brand.three'}
      borderColor={colorMode === 'light' ? 'brand.two' : 'brand.zero'}
      backgroundColor={colorMode === 'light' ? 'brand.three' : 'brand.two'}
    >
      {value}
    </Box>
  )
}
