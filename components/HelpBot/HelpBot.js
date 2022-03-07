import { Container, Box, Text } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import styles from "./HelpBot.module.css";

const HelpBot = () => {
  return(
      <Container as = "footer" className = {styles.base}>
      <FiUser style = {{color: "white", height: "40px", width: "40px" }}/></Container> 
  )
}

export default HelpBot;
