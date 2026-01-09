import "assets/sass/index.scss"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/open-sans"

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import theme from "theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {element}
    </ChakraProvider>
  )
}
