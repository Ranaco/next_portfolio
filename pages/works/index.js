import { SimpleGrid, Box, Container, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import messenger  from "../../public/images/messenger_clone/messenger_1.png"
import { WorkTile} from "../../components/WorkTile";
import Calc from "../../public/images/Calculator/calc_1.jpg";
import Note from "../../public/images/NoteIt/note_2.jpg";
import Section from "../../components/Section";
import Layout from "../../components/layouts/article";
import Footer from "../../components/HelpBot/HelpBot"

const Works = () => {
  return(
      <Layout title = "Works">
    <Section>
    <Box align = "center" style = {{ paddingTop: "50%", color: "white"}}>
    <SimpleGrid columns = {[0, 0, 2]} spacingX = { 295 } spacingY = { 89 }>
        <WorkTile image = {messenger} title = "Messenger Clone">
              A fully working messenger clone 
        </WorkTile>
         <WorkTile image = {Calc} title = "Custom Ui Calculator">
              A fully working Calculator App 
        </WorkTile>
 <WorkTile image = {Note} title = "NoteIt" padb = "20">
              A fully working Note taking App 
        </WorkTile>

    </SimpleGrid>
  </Box>
    </Section>
    </Layout>
  )
}

export default Works
