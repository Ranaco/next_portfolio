import {
  Box, 
  Container,
  Stack,
  Text,
} from "@chakra-ui/react";

const Tile = ({ image, title, desc }) => {
  return(
    <Container>
      <Text color = "white">{title} </Text>
    <Text color = "white">{desc}, </Text>
      <img src = {image} alt = "no image"/>
    </Container>
  )
}

export default Tile
