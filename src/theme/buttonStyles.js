import { mode } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
  baseStyle: (props) => ({
    _focus: { boxShadow: "outline" },
    _hover: {
      textDecoration: "none",
    },
    borderRadius: "sm",
    fontWeight: 500,
    fontSize: "sm",
  }),
  sizes: {
    xs: {
      h: "1.5rem",
      px: "0.5rem",
      fontSize: "xs",
    },
    sm: {
      h: "2rem",
      px: "0.75rem",
    },
    md: {
      h: "2.25rem",
      px: "1rem",
    },
    lg: {
      h: "2.5rem",
      px: "1.5rem",
    },
  },
  variants: {
    primary: (props) => ({
      textDecoration: "none",
      color: mode("gray.100", "gray.900")(props),
      backgroundColor: mode("brand.200", "brand.300")(props),
      borderColor: mode("gray.100", "gray.900")(props),
      border: "2px",
      _active: {
        backgroundColor: mode("brand.100", "brand.400")(props),
        color: mode("gray.100", "gray.900")(props),
      },
      _hover: {
        backgroundColor: mode("brand.100", "brand.400")(props),
        color: mode("gray.100", "gray.900")(props),
        borderColor: mode("brand.200", "brand.300")(props),
      },
    }),
    secondary: (props) => ({
      color: mode("gray.800", "gray.200")(props),
      backgroundColor: mode("gray.200", "gray.800")(props),
      _hover: {
        backgroundColor: mode("gray.300", "gray.700")(props),
        color: mode("gray.800", "gray.200")(props),
      },
      _active: {
        backgroundColor: mode("gray.400", "gray.600")(props),
        color: mode("gray.800", "gray.200")(props),
      },
    }),
    outline: (props) => ({
      textDecoration: "none",
      color: mode("gray.800", "gray.200")(props),
      backgroundColor: "transparent",
      border: "2px",
      borderColor: mode("gray.900", "gray.100")(props),
      _active: {
        color: mode("gray.800", "gray.200")(props),
        backgroundColor: mode("gray.200", "gray.800")(props),
      },
      _hover: {
        color: mode("gray.800", "gray.200")(props),
        backgroundColor: mode("gray.200", "gray.800")(props),
      },
    }),
  },
}
