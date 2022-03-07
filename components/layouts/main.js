import { Box, Container } from "@chakra-ui/react";
import Head from 'next/head';
import NavBar from "../Navbar";
import HelpBot from "../HelpBot/HelpBot";

const Main = ({children, router}) => {
 
  return(
    <Box align = "center">
        <NavBar path = {router.asPath}/>
        <Head>
            <meta name="viewport" content = "width=device-width, initial-scale=1"/>
            <title> Rana Satyam - Homepage</title>
        </Head>
             <Container pt = {14} maxW = "container.md" >  
        <div>  {children}</div>
      <HelpBot/>
      </Container>
    </Box>
  )
}

export default Main
