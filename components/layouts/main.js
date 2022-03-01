import { Box, Container } from "@chakra-ui/react";
import Head from 'next/head';
import NavBar from "../Navbar";

const Main = ({children, router}) => {
 
  return(
    <Box align = "center" bgColor = "#202023" height = "100vh">
        <Head>
            <meta name="viewport" content = "width=device-width, initial-scale=1"/>
            <title> Rana Satyam - Homepage</title>
            <link href = "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap" rel = "stylesheet"/>
        </Head>
        <NavBar path = {router.asPath}/>
      <Container p = {0} maxW = "100vw" bgColor = "#202023">  
        {children}
      </Container>
    </Box>
  )
}

export default Main
