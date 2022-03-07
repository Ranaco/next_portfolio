import { Stack,
         Box,
         Text, 
         Container,
         Heading,
         Flex,
         Link,    
      } from '@chakra-ui/react'
import Section from '../components/Section'
import AnimatedText from '../components/animatedText'
import NextLink from "next/link"
import Bio from '../components/Bio'

const Homepage = () => {
  return (
    <Container maxW="100vw" bgColor="#202023">
      <Box color="white" mb={5} p={4} height="30px">
        <Text
          mt="380px"
          fontSize="25px"
          bgColor="whiteAlpha.200"
          borderRadius="2px"
          width="550px"
        >
          Hy, I am a Flutter and Web developer from India{' '}
        </Text>
      </Box>
      <Stack
        mt={450}
        alignItems="center"
        maxW = "400px"
        flexGrow={0}
        direction={{ base: 'column' }}
      
        width="100%"
        maxW="80vw"
      >
        <Flex mr={200}>
          <Heading as="h1" color="white" variant="page-title">
            Rana Satyam Raj
          </Heading>
        </Flex>
        <Flex>
          <AnimatedText
            init={{ y: -100, opacity: 0.5 }}
            anim={{ y: 0, opacity: 1 }}
          >
            Always a learner first ;)
          </AnimatedText>
        </Flex>
      </Stack>
      <Box>
        <Section>
          <Stack
            direction={{ base: 'column' }}
            alignItems="start"
            mt={20}
          >
            <Flex>
                <NextLink 
                  href = "/works"
                  passHref 
                  scroll = { false }>
                <Heading 
                   as = "h2"
                   css = {{ cursor: "pointer" }}
                   variant = "section-title"
                   color = "white">
                  Works
                </Heading>
                </NextLink>
            </Flex>
          <Flex pl = "40px">
        <Text color = "white" fontSize = "25px" align = "start">
        <p>
        Rana is a student and developer based in India and loves to code. He started coding for fun but
        soon, realised coding is a whole another thing. He loves to learn new technologies and solve real life problems
        with code.
        </p> 
        </Text>  
        </Flex>
        <Flex align = "start">
                <Heading mt = { 20 } as = "h1" variant = "section-title">
                  <Text color = "white">
                      Bio
                  </Text>
                </Heading>
         </Flex>
          <Bio>
            <Flex align ="center" gap = { 10 }>
              <Text fontWeight = "bold" fontSize = "30px">
          2004
          </Text>
            <Text fontSize = { 20 }>
                Born in Bihar, India
            </Text>
        </Flex>
      <Flex width = "50vw" pt = { 5 } align = "start" gap = { 10 }>
       <Box width = { 400 } pr = { 12 }>
        <Text fontWeight= "bold" fontSize = "30px">
            2021 - /
        </Text></Box>
        <Text fontSize = { 20 } pt = { 2 } textAlign = "start">
              Finished Matriculation from <Link href = "https://stkarenshighschool.com" target = { "_" }>St. Karen's High School</Link> and opted for PCM( Physics/Chemistry/Maths ) for 
              Intermediate with non-schooling. Started coding the same year(don't know the exact month but it should be May).
              And stil going...
        </Text>
      </Flex>
        
    </Bio>
  
        </Stack>
        </Section>
      </Box>
    </Container>
  )
}

export default Homepage
