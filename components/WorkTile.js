import { Stack, Text, Heading, Flex, Container, LinkBox, LinkOverlay, Box, Global } from '@chakra-ui/react'
import Image from "next/image"
import NextLink from "next/link"

export const WorkTile = ({ image, title, padb, children }) => (
    <Box width = "100%" textAlign = "center" mb = { padb ?? 0 } >
    <NextLink href = "/about" scroll = { false }> 
    <LinkBox cursor = "pointer">
    <Box p = { 26 } bgColor = "whiteAlpha.200" borderRadius = "30px" width = "350px" height = "550">
      <Image className = "grid-item-thumbnail" loading = "lazy" placeholder = "blur" src = {image} height = "500" width = "250"/> </Box>
      <Text pt = { 5 } fontSize = "30px" fontWeight = "bold">{title}
          </Text>
    <Text fontSize = { 24 }> {children} 
    </Text>
  </LinkBox>
  </NextLink>
  </Box>
  )



export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)


