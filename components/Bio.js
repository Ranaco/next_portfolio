import { Text, Container, Box, } from "@chakra-ui/react";

const Bio = ({ children }) => {
  return(
    <Container color = "white" width = "100vw"> 
       
    {children}
    </Container>
  )
}

export default Bio;
