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
      color: 'brand.one',
      backgroundColor: 'brand.three',
      // bgGradient: 'linear(to-br, , brand.three 80%,  brand.one )',
      borderColor: 'brand.one',
      border: '2px',
      _active: {
        outlineWidth: '2px',
        outlineColor: 'brand.three',
      },
      _hover: {
        border: '2px',
        backgroundColor: 'brand.one',
        color: 'brand.three',
        borderColor: 'brand.three',
      },
    },
    btnOne: {
      color: 'brand.dark',
      backgroundColor: 'brand.six',
    },
    btnTwo: {
      textDecoration: 'underline',
      color: 'brand.three',
      border: '2px',
      borderColor: 'brand.three',
      _active: {
        outlineWidth: '2px',
        outlineColor: 'brand.three',
      },
      _hover: {
        backgroundColor: 'brand.three',
        color: 'brand.one',
      },
    },
  },
}

export const Links = {
  baseStyle: {
    color: 'brand.three',
    fontWeight: 600,
    __hover: {},
  },
  variants: {
    linkOne: {
      color: 'brand.three',
      paddingRight: '1rem',
      paddingLeft: '1rem',
      position: 'relative',
      fontWeight: 600,
      letterSpacing: '.1rem',
      _after: {
        transition: 'all 0.15s ease-out',
        zIndex: '-1',
        // bgGradient: 'linear(to-br, , brand.one 80%,  brand.three )',
        background: 'brand.three',
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
        color: 'brand.three',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.three',
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
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.three',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '140%',
        },
      },
    },

    linkInline: {
      color: 'brand.three',
      paddingRight: '.3rem',
      paddingLeft: '.3rem',
      position: 'relative',
      fontWeight: 600,
      letterSpacing: '.1rem',
      _after: {
        transition: 'all 0.15s ease-out',
        zIndex: '-1',
        // bgGradient: 'linear(to-br, , brand.one 80%,  brand.three )',
        background: 'brand.three',
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
        color: 'brand.three',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.three',
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
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.three',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '140%',
        },
      },
    },
  },
}
