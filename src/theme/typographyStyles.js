import { mode } from "@chakra-ui/theme-tools"

export const Fonts = {
  heading: "Questrial, sans-serif",
  body: "'IBM Plex Sans Condensed', sans-serif",
}

export const FontSizeScale = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "2.75rem",
  "6xl": "3.25rem",
  "7xl": "3.75rem",
  "8xl": "4.5rem",
  "9xl": "5.5rem",
}

// Heading
export const HeadingStyles = {
  baseStyle: (props) => ({
    fontWeight: 800,
    color: mode("gray.900", "gray.100")(props),
    marginTop: 6,
    marginBottom: 4,
    lineHeight: "base",
    letterSpacing: "0.02em",
  }),
  sizes: {
    "4xl": {
      fontSize: ["4xl", null, "7xl"],
      lineHeight: "shorter",
    },
    "3xl": {
      fontSize: ["3xl", null, "5xl"],
      lineHeight: "short",
    },
    "2xl": {
      fontSize: ["2xl", null, "4xl"],
      lineHeight: "short",
      letterSpacing: "0.05em",
    },
    "xl": {
      fontSize: ["xl", null, "2xl"],
      lineHeight: "base",
    },
    "lg": {
      fontSize: "lg",
      lineHeight: "base",
    },
    "md": {
      fontSize: "md",
      lineHeight: "base",
      letterSpacing: "0.05em",
    },
    "sm": {
      fontSize: "sm",
      lineHeight: "base",
    },
    "xs": {
      fontSize: "xs",
      lineHeight: "base",
    },
  },

  variants: {
    sec: (props) => ({
      color: mode("gray.700", "gray.400")(props),
      fontWeight: 500,
      lineHeight: "tall",
    }),
    tri: (props) => ({
      color: mode("gray.700", "gray.400")(props),
      fontWeight: 800,
      lineHeight: "tall",
    }),
    quo: (props) => ({
      color: mode("brand.500", "brand.300")(props),
      fontWeight: 800,
      lineHeight: "tall",
    }),
    sideNavHeader: (props) => ({
      textDecoration: "none",
      color: mode("gray.700", "gray.400")(props),
      fontWeight: 700,
      marginBottom: 4,
      _active: {
        color: mode("brand.500", "gray.300")(props),
      },
      _focus: {
        color: mode("brand.500", "gray.400")(props),
      },
      _selected: {
        color: mode("brand.500", "gray.200")(props),
      },
      _expanded: {
        color: mode("gray.700", "gray.300")(props),
      },
    }),
    sideNavLink: (props) => ({
      color: mode("gray.700", "gray.500")(props),
      marginBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      textDecoration: "none",
      _selected: {
        color: mode("gray.700", "gray.300")(props),
      },
    }),
  },
  defaultProps: {},
}

export const TextStyles = {
  baseStyle: (props) => ({
    color: mode("gray.800", "gray.200")(props),
    fontWeight: 500,
    letterSpacing: "0.05em",
    marginBottom: 4,
  }),
  sizes: {
    "4xl": {},
    "3xl": {},
    "2xl": {},
    xl: {
      lineHeight: "9",
    },
    lg: {
      lineHeight: "tall",
    },
    md: {
      lineHeight: "tall",
    },
    sm: {},
  },
  variants: {
    sec: (props) => ({
      color: mode("gray.700", "gray.400")(props),
      fontWeight: 500,
      lineHeight: "tall",
    }),
  },
}
