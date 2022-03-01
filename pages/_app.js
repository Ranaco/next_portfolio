import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import { motion } from "framer-motion";
import theme from "../lib/theme"
import Font from '../components/font';

const Website = ({ Component, pageProps, router }) => {
  return( 
    <ChakraProvider theme = {theme}>
    <Font/>
 <Layout router = {router}>
    <motion.div key = {router.route} initial = "page-initial" animate = "page-final" variants = {
    {
      "page-initial": {
        opacity: 0.5,
        x: -200,
},
      "page-final": {
        opacity: 1,
        x: 0,
      }
    }
  }>
          <Component {...pageProps} key = {router.route}/>
  </motion.div>
    </Layout>
    </ChakraProvider>
  )
}

export default Website;
