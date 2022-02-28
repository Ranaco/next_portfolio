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
} from "@chakra-ui/react";
import Logo from "./logo";
import NextLink from 'next/link';

const LinkItem = ({ path, href, children, ...props}) => {
  const active = path === href;
  const inActiveColor = useColorModeValue("gray200", "whiteAlpha.900")
  return( 
    <NextLink href = {href} passHref scroll = {false}>
    <Link fontSize = "30px"
    color = {active ? inActiveColor : "#ffffff60"}
    bg = {active ? undefined : "grassTeal"}
    alignText = "center"
    p = { 6 }
    pl = { 10 }
    > 
    {children}
    </Link>
    </NextLink>
  )
}

const NavBar = (props) => {
  return(
    <Box position = "fixed" w = "100%" css = {{backdropFilter: "blur(10px)"}} bgColor = {useColorModeValue("#20202380","#ffffff40")} color = "white" h = { 20 } as = "nav" >
      <Box width = "50vw" display = "flex" p = { 3 } maxW = "container.xl" wrap = "wrap" align = "center" justify = "space-around">  
        <Flex align = "center" mr = { 5 } >
          <Heading letterSpacing = {"tighter"} pr = { 15 }>
              <Logo/>
          </Heading>
        </Flex>
          <Stack direction = {['row', 'base']}>
              <LinkItem href = "/" path = {props.path}>
                  Home
              </LinkItem>
              <LinkItem href = "/works" path = {props.path}>
                Works
              </LinkItem>
              <LinkItem href = "/about" path = {props.path}>
                 About 
              </LinkItem>
          </Stack>
      </Box>
    </Box>
  )
}

export default NavBar
