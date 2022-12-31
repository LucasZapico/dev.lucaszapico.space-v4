import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import LinkStyles from "theme/linkStyles"
import { ButtonStyles } from "theme/buttonStyles"
import { TagStyles } from "theme/tagStyles"
import { Color } from "theme/colorStyles"
import {
  HeadingStyles,
  TextStyles,
  Fonts,
  FontSizeScale,
} from "theme/typographyStyles"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: Fonts,
  fontSizes: FontSizeScale,
  colors: {
    ...Color,
  },
  components: {
    Tag: TagStyles,
    Link: LinkStyles,
    Button: ButtonStyles,
    Heading: HeadingStyles,
    Text: TextStyles,
  },
  styles: {
    global: ({ colorMode }) => {
      return {
        body: {
          color: colorMode === "dark" ? "gray.100" : "gray.900",
          bg: colorMode === "dark" ? "gray.900" : "white",
        },
        "*::placeholder": {
          color: colorMode === "dark" ? "gray.100" : "gray.900",
        },
        "*, *::before, &::after": {
          borderColor: colorMode === "dark" ? "gray.100" : "gray.900",
        },
      }
    },
  },
})

export default theme
