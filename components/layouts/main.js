import { Box, Container } from "@chakra-ui/react";
import Head from 'next/head';
import NavBar from "../Navbar";

const Main = ({children, router}) => {
  const deterName = () => {
    switch(router.route.asPath){
      case "/":
        return Home
      break;
      case "/about": 
        return About
      break;
      case "/works":
        return Works
      break;
      default:
        return Error
    }
  }
  return(
    <Box align = "center">
        <Head>
            <meta name="viewport" content = "width=device-width, initial-scale=1"/>
            <title> Rana Satyam - Homepage</title>
            <link href = "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap" rel = "stylesheet"/>
        </Head>
        <NavBar path = {router.asPath}/>
      <Container p = {0} maxW = "100vw"  maxH = "100vh">  
        {children}
      </Container>
    </Box>
  )
}

export default Main
