import aix from '../../assets/aix.png';
import { Box, Flex, Image, Text, UnorderedList, ListItem, IconButton, Divider, Heading } from '@chakra-ui/react';
import { navBarStyles } from './navBarStyles';
import { Link } from 'react-router-dom';
import Portfolio from '../../views/Portfolio/Portfolio';
import AboutMe from '../../views/AboutMe/AboutMe';
import { ChevronRightIcon} from "@chakra-ui/icons";
import Contact from '../../views/Contact/Contact';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';
import CustomModal from './Helper/CustomModal';
import CVAixaGalin from '../../assets/CVAixaGalin.pdf'

const NavBar = () => {

  const [showModal, setShowModal] = useState(false);

  const handleWorkClick = () => {
    setShowModal(true);
  };

  const handleCVClick = () => {
    window.open(CVAixaGalin, "_blank");
  };
  
  return (
    <Flex {...navBarStyles.flex}>
      <Box {...navBarStyles.box}>
     
          <Image {...navBarStyles.img} src={aix} alt="tu foto" />

          <Heading   fontWeight="bold" textAlign='center' color="#ffa692">AIXA GALIN </Heading>

          <Text  fontSize="xl"  mb="2" color='white' textAlign='center'> Full-Stack Web Developer </Text>

          <Flex mt="15px"  >
            <UnorderedList listStyleType="none">
              <ListItem _hover={{ bg: "#ffa692" }} mt="15px" padding='5px' color='white' ><Link to='/portfolio' >Portfolio <ChevronRightIcon /></Link></ListItem>
              <ListItem _hover={{ bg: "#ffa692" }} mt="15px" padding='5px' color='white'><Link to='/aboutme'>About Me<ChevronRightIcon /></Link></ListItem>
              <ListItem _hover={{ bg: "#ffa692" }} mt="15px" padding='5px' color='white'><Link to='/contact'>Contact Me<ChevronRightIcon /></Link></ListItem>
              <ListItem
                  _hover={{ bg: "#ffa692" }}
                  mt="15px"
                  padding="5px"
                  onClick={handleCVClick}
                  cursor="pointer"
                  color='white'
                >
                  CV <ChevronRightIcon />
                </ListItem>
            </UnorderedList>          
          </Flex>

        <Divider mt="10px"/>
        <Flex mt="10px" fontSize="xs" >
          <Text >GET IN TOUCH</Text>

            <Box {...navBarStyles.boxLinks} >
              <Link  to= "https://www.linkedin.com/in/aixagalin" target="_blank" > <IconButton mr="10px" mt='1rem' icon={<BsLinkedin />} _hover={{ bg: "#ffa692" }} /> </Link>
              <Link to= "https://github.com/Aixmar/" target="_blank" > <IconButton mr="10px" mt='1rem' icon={<BsGithub />} _hover={{ bg: "#ffa692" }} /> </Link>
            {/* <Link to= "www.linkedin.com/in/aixagalin"  target="_blank"> <IconButton mt='1rem' icon={<AiOutlineMail />}  _hover={{ bg: "#ffa692" }}  /> </Link> */}
            <Text  onClick={handleWorkClick} cursor="pointer"><IconButton mt='1rem' icon={<AiOutlineMail />}  _hover={{ bg: "#ffa692" }}  /></Text>
              {showModal && <CustomModal onClose={() => setShowModal(false)} />}
            </Box>

        </Flex>
        
      </Box>
    </Flex>
  );
};

export default NavBar;