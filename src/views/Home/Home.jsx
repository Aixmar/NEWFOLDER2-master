// import Footer from '../../components/Footer/Footer'
import { Flex, Heading, Text, Box} from '@chakra-ui/react';
import  {homeStyles} from './homeStyles';
import HomeText from '../../views/Home/Helper/Text/HomeText';

import NavBar from '../../components/NavBar/NavBar';
import { motion } from "framer-motion";

const Home = () => {


  return (
    <Flex {...homeStyles.container} height='100%' >
        
          <Flex>
              <NavBar/>
          </Flex>

          <Flex
            direction="column"
            h="50%"
            w="35rem"
            gap="3.5rem"
            justify="center"
            align='center'
          >
            <Heading align="center" fontSize="50px" w="30rem" marginTop="100px">
            Welcome! I'm Aixa! 
            </Heading>
            <Box align="center" h="15rem" w="30rem">
            <HomeText />
            </Box>
          </Flex>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        </motion.div>

          {/*-MOVIL-------------------------------------------------------------*/}

   
    

    </Flex>
  );
};



export default Home;
