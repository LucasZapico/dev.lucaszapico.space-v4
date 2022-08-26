import { extendTheme } from '@chakra-ui/react'
import { Color } from './color'
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
      zero: '#1A1E1B',
      one: '#585D59',
      two: '#3A403B',
      three: '#FFE7A9',
      four: '#FFE194',
      five: '#C30202',
      six: '#620101',
    },
    ...Color,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.zero',
        color: 'gray.200',
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
