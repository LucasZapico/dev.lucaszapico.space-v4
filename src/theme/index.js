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
  sizes: {
    "container": {
      xxl: "1440px",
    }
  },
  components: {
    Tag: TagStyles,
    Link: LinkStyles,
    Button: ButtonStyles,
    Heading: HeadingStyles,
    Text: TextStyles,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "gray.200")(props),
        bg: mode("white", "gray.900")(props),
      },
      "*::placeholder": {
        color: mode("gray.900", "gray.100")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.900", "gray.100")(props),
      },
    }),
  },
})

export default theme
