export const Fonts = {
  heading: "Montserrat, sans-serif",
  body: "Montserrat, sans-serif",
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
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
}

// Heading
export const HeadingStyles = {
  baseStyle: ({ colorMode }) => ({
    fontWeight: 800,
    color: colorMode === "dark" ? "gray.100" : "gray.900",
    marginTop: 6,
    marginBottom: 4,
    lineHeight: "base",
    letterSpacing: "0.02rem",
  }),
  sizes: {
    "4xl": {
      fontSize: ["4xl", null, "9xl"],
      lineHeight: "tall",
    },
    "3xl": {
      fontSize: ["4xl", null, "7xl"],
      lineHeight: "base",
    },
    "2xl": {
      lineHeight: "base",
    },
    xl: {
      lineHeight: "base",
    },
    lg: {
      lineHeight: "base",
    },
    md: {
      fontSize: "xl",
      lineHeight: "base",
    },
    sm: {
      fontSize: "md",
      lineHeight: "base",
    },
    xs: {
      fontSize: "sm",
      lineHeight: "base",
    },
  },

  variants: {
    sec: ({ colorMode }) => ({
      color: colorMode === "dark" ? "gray.400" : "gray.700",
      fontWeight: 500,
      lineHeight: "tall",
    }),
    tri: ({ colorMode }) => ({
      color: colorMode === "dark" ? "gray.400" : "gray.700",
      fontWeight: 800,
      lineHeight: "tall",
    }),
    quo: ({ colorMode }) => ({
      color: colorMode === "dark" ? "brand.300" : "brand.400",
      fontWeight: 800,
      lineHeight: "tall",
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
}

export const TextStyles = {
  baseStyle: ({ colorMode }) => ({
    color: colorMode === "dark" ? "gray.200" : "gray.800",
    fontWeight: 500,
    letterSpacing: "0.1rem",
    lineHeight: "6",
    marginBottom: 6,
  }),
}