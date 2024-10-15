export const ButtonStyles = {
  baseStyle: ({ colorMode }) => ({
    _focus: { boxShadow: "none" },
    _hover: {
      textDecoration: "none",
    },
    borderRadius: "sm",
    fontWeight: 400,
    minWidth: "10rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  }),
  variants: {
    btnCTA: ({ colorMode }) => ({
      textDecoration: "none",
      color: colorMode === "dark" ? "gray.900" : "gray.100",
      backgroundColor: colorMode === "dark" ? "brand.300" : "brand.500",
      borderColor: colorMode === "dark" ? "gray.900" : "gray.100",
      border: "2px",
      _active: {
        backgroundColor: colorMode === "dark" ? "brand.300" : "brand.500",
        color: colorMode === "dark" ? "gray.900" : "gray.100",
      },
      _hover: {
        backgroundColor: colorMode === "dark" ? "brand.300" : "brand.500",
        color: colorMode === "dark" ? "gray.900" : "gray.100",
        borderColor: colorMode === "dark" ? "brand.300" : "brand.500",
      },
    }),
    btnOne: ({ colorMode }) => ({
      color: colorMode === "dark" ? "gray.200" : "gray.800",
      backgroundColor: colorMode === "dark" ? "gray.800" : "gray.200",
      _hover: {
        backgroundColor: colorMode === "dark" ? "gray.700" : "gray.300",
        color: colorMode === "dark" ? "gray.200" : "gray.800",
      },
      _active: {
        backgroundColor: colorMode === "dark" ? "gray.600" : "gray.400",
        color: colorMode === "dark" ? "gray.200" : "gray.800",
      },
    }),
    btnTwo: ({ colorMode }) => ({
      textDecoration: "none",
      color: colorMode === "dark" ? "gray.200" : "gray.800",
      backgroundColor: colorMode === "dark" ? "gray.900" : "gray.100",
      border: "2px",
      borderColor: colorMode === "dark" ? "gray.100" : "gray.900",
      _active: {
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        backgroundColor: colorMode === "dark" ? "gray.800" : "gray.200",
      },
      _hover: {
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        backgroundColor: colorMode === "dark" ? "gray.800" : "gray.200",
      },
    }),
  },
}
