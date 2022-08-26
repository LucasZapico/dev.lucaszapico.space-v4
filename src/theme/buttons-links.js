export const Buttons = {
  baseStyle: {
    _focus: { boxShadow: 'none' },
    _hover: {
      textDecoration: 'none',
    },
    borderRadius: '0px',
    fontWeight: 400,
    minWidth: '10rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  variants: {
    btnCTA: {
      textDecoration: 'underline',
      color: 'gray.800',
      backgroundColor: 'gray.100',
      // bgGradient: 'linear(to-br, , gray.100 80%,  brand.one )',
      borderColor: 'gray.100',
      border: '2px',
      _active: {
        outlineWidth: '2px',
        outlineColor: 'gray.100',
      },
      _hover: {
        border: '2px',
        backgroundColor: 'gray.100',
        color: 'gray.800',
        borderColor: 'gray.100',
      },
    },
    btnOne: {
      color: 'gray.800',
      backgroundColor: 'gray.100',
    },
    btnTwo: {
      textDecoration: 'underline',
      color: 'gray.800',
      border: '2px',
      borderColor: 'gray.100',
      _active: {
        outlineWidth: '2px',
        outlineColor: 'gray.100',
      },
      _hover: {
        backgroundColor: 'gray.100',
        color: 'gray.800',
      },
    },
  },
}

export const Links = {
  baseStyle: {
    color: 'gray.100',
    fontWeight: 600,
    __hover: {},
  },
  variants: {
    linkOne: {
      color: 'gray.100',
      paddingRight: '1rem',
      paddingLeft: '1rem',
      position: 'relative',
      fontWeight: 600,
      letterSpacing: '.1rem',
      _after: {
        transition: 'all 0.15s ease-out',
        zIndex: '-1',
        // bgGradient: 'linear(to-br, , brand.one 80%,  gray.100 )',
        background: 'gray.100',
        position: 'absolute',
        content: '""',
        height: '5px',
        width: '100%',
        paddingRight: '0rem',
        paddingLeft: '0rem',
        bottom: '-5px',
        right: '0%',
      },
      _active: {
        color: 'gray.100',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  gray.100 80%,  brand.one )',
          background: 'gray.100',
          position: 'absolute',

          content: '""',
          width: '10px',
          height: '140%',
        },
      },
      _hover: {
        color: 'brand.one',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  gray.100 80%,  brand.one )',
          background: 'gray.100',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '140%',
        },
      },
    },

    linkInline: {
      color: 'gray.100',
      paddingRight: '.3rem',
      paddingLeft: '.3rem',
      position: 'relative',
      fontWeight: 600,
      letterSpacing: '.1rem',
      _after: {
        transition: 'all 0.15s ease-out',
        zIndex: '-1',
        // bgGradient: 'linear(to-br, , brand.one 80%,  gray.100 )',
        background: 'gray.100',
        position: 'absolute',
        content: '""',
        height: '5px',
        width: '100%',
        paddingRight: '0rem',
        paddingLeft: '0rem',
        bottom: '-5px',
        right: '0%',
      },
      _active: {
        color: 'gray.100',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  gray.100 80%,  brand.one )',
          background: 'gray.100',
          position: 'absolute',

          content: '""',
          width: '5px',
          height: '140%',
        },
      },
      _hover: {
        color: 'brand.one',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  gray.100 80%,  brand.one )',
          background: 'gray.100',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '140%',
        },
      },
    },
  },
}
