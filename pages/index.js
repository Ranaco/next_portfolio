import {
  Box,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
  
import Link from 'next/link'

const Homepage = () => {
  return(
    <Container maxW = "100vw" height = "100vh" bgColor = "#202023">
    <Box color = "white" mb = { 5 } p = { 4 } bgColor = "red" width = "100px" height = "30px" >
          Hy, I am a Flutter and Web developer from India
    </Box>
      <Heading as = "h1" color = "white" variant = "page-title" pt  = "2vw">
      <Text fontSize = "50px">
      Rana Satyam Raj
      </Text>
      </Heading>
    </Container>
  )
}

export default Homepage
