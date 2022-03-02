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
  const active = path === href
  const inActiveColor = useColorModeValue('whiteAlpha.900', 'gray200')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        fontSize="30px"
        color={active ? '#ffffff' : inActiveColor}
        bg={active ? 'whiteAlpha.200' : undefined}
        alignText="center"
        p={6}
        pl={10}
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
      bgColor={useColorModeValue('#20202380', '#ffffff40')}
      color="white"
      h={40}
      as="nav"
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
        <Stack direction={['row', 'base']}>
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
