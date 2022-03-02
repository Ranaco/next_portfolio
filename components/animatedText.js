import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";

const AnimatedText = ({ children, fontSize, anim, init, }) => {
  return(
    <motion.div initial = {init} animate = { anim } transition = {{ delay: 0.2, duration: 0.8 }}>
    <Text fontSize = {fontSize ?? 25} color = "white">
      {children}
      </Text>
    </motion.div>
  )
}

export default AnimatedText;
