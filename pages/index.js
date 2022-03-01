import {
  Stack,
  Box,
  Text,
  Container,
  Heading,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Section from '../components/Section';  
import Link from 'next/link'
import Tile from "../components/tile";

const Homepage = () => {
  return(
    <Container maxW = "100vw" height = "100vh" bgColor = "#202023">
    <Box color = "white" mb = { 5 } p = { 4 } height = "30px" >
    <Text mt = "380px" fontSize = "25px" bgColor = "whiteAlpha.200" borderRadius = "2px" width = "550px">
        Hy, I am a Flutter and Web developer from India </Text>
    </Box>
    <Stack mt = { 450 } alignItems = "center" flexGrow = { 1 } direction = {{ base: 'column' }} pr = { 44 } width = "100vw" maxW = "80vw">
  <Flex mr = { 200 }>
    <Heading  as = "h1" color = "white" variant = "page-title">
      Rana Satyam Raj
      </Heading></Flex>
    <Flex mr = { 100 }>
      <div style = {{ color: "white", fontSize: "20px" }}>
          Always a learner first :) 
      </div></Flex>
    </Stack>
    <Box>
    <Section>
      <Box mt = { 5 }>
        <Stack direction = {{ md: "column" }}>
          <Grid templateColumns = "repeat(2, 1fr)" gridRowGap = { 40 } >
            <GridItem>
           <Tile title = "white" desc = "nothing" image = "helo">
                 </Tile>
            </GridItem>
              <GridItem>
            <Tile title = "white" desc = "nothing" image = "helo">
                 </Tile>
            </GridItem> 
             <GridItem>
            <Tile title = "white" desc = "nothing" image = "helo">
                 </Tile>
            </GridItem>
          </Grid>
        </Stack>
      </Box>
    </Section>
    </Box>
    </Container>
  )
}

export default Homepage
