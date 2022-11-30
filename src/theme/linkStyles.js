const LinkStyles = {
  baseStyle: {
    transition: "all 0.15s ease-out",
    cursor: "pointer",
    textDecoration: "underline",
    outline: "none",

    color: "inherit",
    _hover: {
      textDecoration: "underline",
    },
    _focus: {
      boxShadow: "outline",
    },
  },
  variants: {
    navLink: {
      color: "red.300",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: ".5rem",
      paddingBottom: ".5rem",
      _hover: {
        color: "red.200",
      },
      _active: {
        color: "red.400",
      },
      _focus: {
        color: "red.500",
      },
    },
  },
}

export default LinkStyles
