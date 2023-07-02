/**
 * TODO: add colormode support to link states
 */

const LinkStyles = {
  baseStyle: ({ colorMode }) => ({
    transition: "all 0.15s ease-out",
    cursor: "pointer",
    textDecoration: "underline",
    outline: "none",
    color: colorMode === "dark" ? "yellow.600" : "yellow.600",
    _hover: {
      textDecoration: "none",
    },
    _focus: {
      boxShadow: "outline",
    },
  }),
  variants: {
   
  
    navLink: ({ colorMode }) => ({
      textDecoration: "none",
      color: colorMode === "dark" ? "brand.300" : "brand.500",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: ".5rem",
      fontWeight: 800,
      paddingBottom: ".5rem",
      position: "relative",
      _after: {
        transition: "all 0.15s ease-out",
        zIndex: "-1",
        // bgGradient: 'linear(to-br, , brand.one 80%,  gray.100 )',
        background: colorMode === "dark" ? "gray.100" : "gray.900",
        position: "absolute",
        content: '""',
        height: "0px",
        width: "100%",
        paddingRight: "0rem",
        paddingLeft: "0rem",
        bottom: "-5px",
        right: "0%",
      },
      _hover: {
        color: colorMode === "dark" ? "brand.300" : "brand.500",
        _after: {
          zIndex: "-1",
          // bgGradient: 'linear(to-br,  gray.100 80%,  brand.one )',
          color: colorMode === "dark" ? "brand.300" : "brand.500",
          position: "absolute",
          content: '""',
          width: "100%",
          height: "2px",
        },
      },
      _active: {
        color: colorMode === "dark" ? "brand.300" : "brand.500",
      },
      _focus: {
        color: colorMode === "dark" ? "brand.300" : "brand.500",
      },
    }),
    aside: ({ colorMode }) => ({
      textDecoration: "none",
      paddingTop: ".2rem",
      paddingBottom: ".2rem",
      color: colorMode === "dark" ? "gray.300" : "gray.900",
      _hover: {
        color: "gray.300",
      },
      _active: {
        color: "gray.400",
      },
      _focus: {
        color: "gray.500",
      },
    }),
    linkOne: ({ colorMode }) => ({
      textDecoration: "none",
      color: colorMode === "dark" ? "gray.300" : "gray.900",
      paddingRight: "1rem",
      paddingLeft: "1rem",
      position: "relative",
      fontWeight: 600,
      letterSpacing: ".1rem",
      _after: {
        transition: "all 0.15s ease-out",
        zIndex: "-1",
        // bgGradient: 'linear(to-br, , brand.one 80%,  gray.100 )',
        background: colorMode === "dark" ? "gray.300" : "gray.900",
        position: "absolute",
        content: '""',
        height: "2px",
        width: "100%",
        paddingRight: "0rem",
        paddingLeft: "0rem",
        bottom: "-5px",
        right: "0%",
      },
      _active: {
        color: colorMode === "dark" ? "gray.300" : "gray.800",
        _after: {
          zIndex: "-1",
          // bgGradient: 'linear(to-br,  gray.100 80%,  brand.one )',
          background: colorMode === "dark" ? "gray.300" : "gray.800",
          position: "absolute",

          content: '""',
          width: "2px",
          height: "140%",
        },
      },
      _hover: {
        // color: colorMode === "dark" ? "gray.800" : "gray.200",
        // background: colorMode === "dark" ? "gray.200" : "gray.800",
        _after: {
          zIndex: "-1",
          background: colorMode === "dark" ? "gray.300" : "gray.800",
          position: "absolute",
          content: '""',
          width: "2px",
          height: "2px",
        },
      },
    }),
    linkInLine: ({ colorMode }) => ({
      color: colorMode === "dark" ? "gray.300" : "gray.900",
      paddingRight: ".3rem",
      paddingLeft: ".3rem",
      position: "relative",
      fontWeight: 600,
      letterSpacing: ".1rem",
      mx: "2",
      _after: {
        transition: "all 0.15s ease-out",
        zIndex: "-1",
        // bgGradient: 'linear(to-br, , brand.one 80%,  gray.100 )',
        background: colorMode === "dark" ? "gray.300" : "gray.900",
        position: "absolute",
        content: '""',
        height: "2px",
        width: "100%",
        paddingRight: "0rem",
        paddingLeft: "0rem",
        bottom: "-5px",
        right: "0%",
      },
      _active: {
        color: colorMode === "dark" ? "gray.300" : "gray.900",
        _after: {
          zIndex: "-1",
          // bgGradient: 'linear(to-br,  gray.100 80%,  brand.one )',
          background: colorMode === "dark" ? "gray.300" : "gray.900",
          position: "absolute",

          content: '""',
          width: "2px",
          height: "140%",
        },
      },
      _hover: {
        // color: colorMode === "dark" ? "gray.800" : "gray.200",
        // background: colorMode === "dark" ? "gray.200" : "gray.800",
        _after: {
          zIndex: "-1",
          background: colorMode === "dark" ? "gray.200" : "gray.800",
          position: "absolute",
          content: '""',
          width: "2px",
          height: "2px",
        },
      },
    }),
  },
}

export default LinkStyles
