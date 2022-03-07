import { motion } from 'framer-motion'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
   return(
      <Box>
      {title && (
        <Head>
          <title>{title} - Rana Satyam Raj</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      {children}
      </Box>
   )
}

export default Layout
