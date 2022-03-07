import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, props }) => {
  return (
    <StyledDiv
      initial="init"
      width = "50vw"
       
      animate="final"
      variants={{
        init: {
          opacity: 0,
          y: 40
        },
        final: {
          opacity: 1,
          y: 0
        }
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
        pb = { 126 }
    >
   {children}   
  </StyledDiv>
  )
}

export default Section
