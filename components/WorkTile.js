import { Box, Container, Stack, Text } from '@chakra-ui/react'
import Image from "next/image"

const WorkTile = ({ image, title, desc }) => {
  return (
    <Container>
      <Text color="white">{title} </Text>
      <Text color="white">{desc}, </Text>
      <Image src={image} alt="no image" />
    </Container>
  )
}

export default WorkTile
