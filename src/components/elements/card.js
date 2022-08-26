import React from 'react'

import { Box } from '@chakra-ui/react'

export const CardOne = ({ content, children, ...rest }) => {
  const colorMode = 'dark'
  console.log('color modes', colorMode)
  return (
    <Box
      p={6}
      backgroundColor={colorMode === 'light' ? 'brand.zero' : 'gray.800'}
      boxShadow={`10px -10px ${colorMode === 'light' ? '#38383a' : '#dbe3df'}`}
      // boxShadow={`10px -10px ${colorMode === 'light' ? '#38383a' : '#f9f6f2'}`}
      {...rest}
    >
      {children || content}
    </Box>
  )
}
