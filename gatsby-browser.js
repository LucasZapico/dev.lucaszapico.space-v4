import "./src/assets/sass/index.scss"
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'prismjs/themes/prism-solarized-dark-atom.css'

import {
  CSSReset,
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme,
} from "@chakra-ui/react"
// import { useColorModeValue, ColorModeProvider } from './src/context/_index';
import React, { useEffect } from "react"
import theme from "./src/theme"

export const wrapRootElement = ({ cookies, element }) => {
  console.log(theme)
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
