import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra( motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition"
    }
  }
);

const Section = ({ children, props }) => {
 return( <StyledDiv
    initial = "init"
    animate = "final" 
    variants = {{
      "init": {
        opacity: 0,
        y: 10,
      },
        "final": {
          opacity: 1,
          y: 0
        }
    }}
   transition = {{duration: 0.5, delay: 0.3 }}
    >
    {children}
  </StyledDiv>
  )
}

export default Section
