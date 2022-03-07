import {
  Container,
  Box,
  Stack,
  Flex,
  Menu,
  useColorModeValue,
  Heading,
  Link,
  MenuItem,
  MenuList,
  IconButton
} from '@chakra-ui/react'
import NextLink from 'next/link'

const LinkItem = ({ path, href, children, ...props }) => {
  console.log(href, path);
  const active = path === href
  const inActiveColor = useColorModeValue('whiteAlpha.900', 'gray200')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        fontSize="25px"
        height = '80px'
        width = "6em"
        color={active ? '#ffffff' : inActiveColor}
        bg={active ? 'whiteAlpha.200' : undefined}
        alignText="center"
        p={5} 
      >
        {children}
      </Link>
    </NextLink>
  )
}

const NavBar = props => {
  return (
    <Box
      position="fixed"
      w="100%"
      css={{ backdropFilter: 'blur(10px)' }}
      bg={useColorModeValue('#20202380', '#ffffff40')}
      height ="8em"
      zIndex = { 1 }
    >
      <Box
        width="50vw"
        display="flex"
        p={3}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-around"
      >
        <Stack direction={['row',]} alignItems = "center" p = { 4 }>
          <LinkItem href="/" path={props.path}>
            Home
          </LinkItem>
          <LinkItem href="/works" path={props.path}>
            Works
          </LinkItem>
          <LinkItem href="/about" path={props.path}>
            About
          </LinkItem>
        </Stack>
      </Box>
    </Box>
  )
}

export default NavBar
