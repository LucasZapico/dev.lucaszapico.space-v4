import "assets/sass/index.scss"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/open-sans"

import {
  CSSReset,
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme,
} from "@chakra-ui/react"
// import { useColorModeValue, ColorModeProvider } from './src/context/_index';
import React, { useEffect } from "react"
import theme from "theme"

export const wrapRootElement = ({ cookies, element }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
