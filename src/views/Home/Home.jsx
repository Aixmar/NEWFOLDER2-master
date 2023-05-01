import { useEffect, useState } from "react";
// import Footer from '../../components/Footer/Footer'
import { Flex, Heading, Text} from '@chakra-ui/react';
import  {homeStyles} from './homeStyles';
import collection from '../../assets/collection.jpg';
import FondoContact1 from '../../assets/FondoContact1.jpg';

import NavBar from '../../components/NavBar/NavBar';
import { motion } from "framer-motion";

const Home = () => {

  const [texto, setTexto] = useState("");

  useEffect(() => {
    const textoCompleto = "Welcome!!";
    let contador = 0;
    
    const intervalo = setInterval(() => {
      setTexto((prevTexto) => {
        contador++;
        return textoCompleto.slice(0, contador);
      });
      if (contador >= textoCompleto.length) {
        clearInterval(intervalo);
      }
    }, 100);
    
    return () => clearInterval(intervalo);
  }, []);
    


  return (
    <Flex {...homeStyles.container} height='100%' bg={`url(${FondoContact1})`} backgroundRepeat='no-repeat' backgroundSize='cover !important'>
        
        <Flex>
            <NavBar/>
        </Flex>

        <Flex>
        <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{ color: "grey", fontSize: "5rem",  marginLeft: "50px", marginTop: "50px" }}
    >
      {texto}
    </motion.div>
        </Flex>
    

    </Flex>
  );
};



export default Home;
