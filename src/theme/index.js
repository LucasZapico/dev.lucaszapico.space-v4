import { extendTheme } from '@chakra-ui/react'
import { Buttons, Links } from './buttons-links'
import { Headings, Fonts, Texts } from './typography'

const dark = {
  zero: '#000000',
  one: '#333333',
  two: '#38383a',
  three: '#e9e5e0',
  four: '#f9f6f2',
  five: '#FFFFFF',
}

const light = {
  zero: '#FFFFFF',
  one: '#f9f6f2',
  two: '#e9e5e0',
  three: '#38383a',
  four: '#333333',
  five: '#000000',
}

export const coreTheme = {
  components: {
    Heading: Headings,
    Link: Links,
    Button: Buttons,
    Text: Texts,
  },
  fonts: Fonts,
}

export const darkTheme = extendTheme({
  components: {
    Heading: Headings,
    Link: Links,
    Button: Buttons,
    Text: Texts,
  },
  fonts: Fonts,
  colors: {
    brand: {
      zero: '#000000',
      one: '#333333',
      two: '#38383a',
      three: '#e9e5e0',
      four: '#f9f6f2',
      five: '#FFFFFF',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.zero',
        color: 'brand.five',
      },
    },
  },
})
export const lightTheme = extendTheme({
  coreTheme,
  colors: {
    brand: {
      zero: '#FFFFFF',
      one: '#f9f6f2',
      two: '#e9e5e0',
      three: '#38383a',
      four: '#333333',
      five: '#000000',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.zero',
        color: 'brand.five',
      },
    },
  },
})

// colors: {
//   brand: (props) => ({

//     zero: props.colorMode === 'dark' ? 'red.300' : 'red.500',

//     // zero: mode('#FFFFFF', '#000000')(props),
//     one: mode('#f9f6f2', '#333333')(props),
//     two: mode('#e9e5e0', '#38383a')(props),
//     three: mode('#38383a', '#e9e5e0')(props),
//     four: mode('#FFFFFF', '#f9f6f2')(props),
//     five: mode('#FFFFFF', '#FFFFFF')(props),
//   }),
// },

// const Colors = (props) => {
//   const light = {
//     zero: '#FFFFFF',
//     one: '#f9f6f2',
//     two: '#e9e5e0',
//     three: '#38383a',
//     four: '#333333',
//     five: '#000000',
//   };
//   const dark = {
//     zero: '#000000',
//     one: '#333333',
//     two: '#38383a',
//     three: '#e9e5e0',
//     four: '#f9f6f2',
//     five: '#FFFFFF',
//   };
//   return ({
//     brand: mode(dark, light)(props),
//   }

//   );
// };
