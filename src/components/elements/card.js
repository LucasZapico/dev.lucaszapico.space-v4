import React from 'react';

import { useColorMode, Box } from '@chakra-ui/react';

export const CardOne = ({ content, children, ...rest }) => {
  const { colorMode } = useColorMode();
  console.log('color modes', colorMode);
  return (
    <Box
      p={6}
      backgroundColor={colorMode === 'light' ? 'brand.three' : 'brand.two'}
      boxShadow={`10px -10px ${colorMode === 'light' ? '#38383a' : '#f9f6f2'}`}
      {...rest}
    >
      {children || content}
    </Box>
  );
};
