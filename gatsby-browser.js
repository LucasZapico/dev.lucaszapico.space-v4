import './src/assets/sass/_index.scss';

import {
  CSSReset,
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme,
} from '@chakra-ui/react';
// import { useColorModeValue, ColorModeProvider } from './src/context/_index';
import { mode } from '@chakra-ui/theme-tools';
import React, { useEffect } from 'react';
import { lightTheme, darkTheme, coreTheme } from './src/theme';

// import './src/assets/sass/font.css';

// const colorMode = 'dark';

// const dark = {
//   brand: {
//     zero: '#000000',
//     one: '#333333',
//     two: '#38383a',
//     three: '#e9e5e0',
//     four: '#f9f6f2',
//     five: '#FFFFFF',
//   },
// };

// const light = {
//   brand: {
//     zero: '#FFFFFF',
//     one: '#f9f6f2',
//     two: '#e9e5e0',
//     three: '#38383a',
//     four: '#333333',
//     five: '#000000',
//   },
// };
// export const Test = ({ children }) => {
//   return (
//     <ColorModeProvider>
//       {children}
//     </ColorModeProvider>
//   );
// };

export const wrapRootElement = ({ cookies, element }) => {
  // const { cookies, element } = props;
  // console.log(props);
  // const { colorMode } = useColorModeValue();
  const colorMode = 'dark';
  const colorModeManager = typeof cookies === 'string'
    ? cookieStorageManager(cookies)
    : localStorageManager;

  return (
    <ChakraProvider
      colorModeManager={colorModeManager}
      theme={extendTheme(colorMode === 'light' ? lightTheme : darkTheme)}
    >
      <CSSReset />
      1
      {element}
    </ChakraProvider>
  );
};

export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  };
}
