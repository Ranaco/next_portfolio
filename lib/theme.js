import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#202023', '#f0e7db')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#ff63c3', '#3d7aed')(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    baseStyle: props => ({
      fontFamily: "'M PLUS Rounded 1c'"
    })
  },
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  h1: "'M PLUS Rounded 1c'",
  div: "'M PLUS Rounded 1c'",
  text: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
