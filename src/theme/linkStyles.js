import { mode } from "@chakra-ui/theme-tools"

const underlineBase = (props) => ({
  transition: "all 0.2s ease-out",
  zIndex: "-1",
  background: mode("gray.900", "gray.300")(props),
  position: "absolute",
  content: '""',
  height: "2px",
  width: "100%",
  bottom: "-4px",
  right: "0%",
})

const underlineHover = (props) => ({
  zIndex: "-1",
  background: mode("gray.800", "gray.300")(props),
  position: "absolute",
  content: '""',
  width: "2px",
  height: "2px",
})

const underlineActive = (props) => ({
  zIndex: "-1",
  background: mode("gray.800", "gray.300")(props),
  position: "absolute",
  content: '""',
  width: "2px",
  height: "140%",
})

const LinkStyles = {
  baseStyle: (props) => ({
    transition: "all 0.2s ease-out",
    cursor: "pointer",
    textDecoration: "underline",
    outline: "none",
    color: mode("gray.600", "gray.300")(props),
    _hover: {
      textDecoration: "none",
    },
    _focus: {
      boxShadow: "outline",
    },
  }),
  variants: {
    navLink: (props) => ({
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontSize: "xs",
      color: mode("brand.200", "brand.300")(props),
      px: 4,
      py: 2,
      fontWeight: 800,
      position: "relative",
      _after: {
        ...underlineBase(props),
        background: mode("gray.900", "gray.100")(props),
        height: "0px",
      },
      _hover: {
        color: mode("brand.200", "brand.300")(props),
        _after: {
          ...underlineHover(props),
          background: mode("gray.900", "gray.100")(props),
          width: "100%",
          height: "2px",
        },
      },
      _active: {
        color: mode("brand.200", "brand.300")(props),
      },
      _focus: {
        color: mode("brand.200", "brand.300")(props),
      },
    }),
    aside: (props) => ({
      textDecoration: "none",
      py: 1,
      color: mode("gray.700", "gray.300")(props),
      _hover: {
        color: mode("gray.900", "gray.100")(props),
      },
      _active: {
        color: mode("gray.800", "gray.200")(props),
      },
      _focus: {
        color: mode("gray.800", "gray.200")(props),
      },
    }),
    linkOne: (props) => ({
      textDecoration: "none",
      color: mode("gray.900", "gray.300")(props),
      px: 4,
      position: "relative",
      fontWeight: 600,
      letterSpacing: "0.05em",
      _after: underlineBase(props),
      _active: {
        color: mode("gray.800", "gray.300")(props),
        _after: underlineActive(props),
      },
      _hover: {
        _after: underlineHover(props),
      },
    }),
    linkInLine: (props) => ({
      color: mode("gray.900", "gray.300")(props),
      px: 1,
      position: "relative",
      fontWeight: 600,
      letterSpacing: "0.05em",
      mx: 2,
      _after: underlineBase(props),
      _active: {
        color: mode("gray.900", "gray.300")(props),
        _after: underlineActive(props),
      },
      _hover: {
        _after: {
          ...underlineHover(props),
          background: mode("gray.800", "gray.200")(props),
        },
      },
    }),
  },
}

export default LinkStyles
