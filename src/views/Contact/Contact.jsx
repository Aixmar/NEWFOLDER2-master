import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Flex, Heading, Text, Box, IconButton, UnorderedList, ListItem, Icon, SimpleGrid, Stack, Link } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";
import fondoContact1 from "../../assets/fondoContact1.jpg";


const Contact = () => {

  const [isHovering, setIsHovering] = useState(false);

  const skypeUsername = "aixamarianag";

  const email = "aixamarianag@gmail.com";
    const subject = "Aixa, I want to contact you";
    const body = "Hello! ..";
  
    const handleEmailClick = (event) => {
      event.preventDefault();
      const url = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
      window.open(url, "_blank");
    };

    const address = "Buenos Aires, Argentina";

  return (
    <>

<Flex flexDirection="row">
      <NavBar />
      <Flex flexDirection="column" justifyContent="top" textAlign="left">
        <Heading marginTop="10%" marginLeft="30px">
          CONTACT ME
        </Heading>
        <Text marginTop="25px" marginLeft={10}>I am available to chat with you!</Text>

        <Box maxWidth="600px" marginTop={10} bgColor='#E9A492' borderRadius={30}  padding={45} marginLeft={5}>
            <Flex flexDirection="column" alignItems="center" >
              
              <Flex alignItems="center" width="100%" marginBottom={5}>
                <Text fontWeight="bold" width="150px" color='white'>Email:</Text>
                <Text
                  cursor="pointer"
                  textDecoration={isHovering ? "underline" : "none"}
                  _hover={{ textDecoration: "underline", color: 'black'  }}
                  onClick={handleEmailClick}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  color='#6B7379'
                >
                  {email}
                </Text>
              </Flex>
          
              <Flex alignItems="center" width="100%" marginTop={4} marginBottom={5}>
                <Text fontWeight="bold" width="150px" color='white'>GitHub:</Text>
                <Link href="https://github.com/Aixmar" >
                  <Text
                    as="a"
                    href="https://github.com/Aixmar"
                    _hover={{ textDecoration: "underline", color: 'black'  }}
                    target="_blank"
                    color='#6B7379'
                  >
                    github.com/Aixmar
                  </Text>
                </Link>
              </Flex>

              <Flex alignItems="center" width="100%" marginTop={4} marginBottom={5}>
                <Text fontWeight="bold" width="150px" color='white'>Skype:</Text>
                <Text
                  as="a"
                  href={`skype:${skypeUsername}?call`}
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="none"
                  _hover={{ textDecoration: "underline", color: 'black' }}
                  color='#6B7379'
                >
                  {skypeUsername}
                </Text>
              </Flex>

              <Flex alignItems="center" width="100%" marginTop={4} marginBottom={5}>
                <Text fontWeight="bold" width="150px" color='white'>Location:</Text>
                <Text
                  as="a"
                  href={`https://www.google.com
                  
                  /maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="none"
                  _hover={{ textDecoration: "underline", color: 'black' }}
                  color='#6B7379'
                >
                  {address}
                </Text>
              </Flex>
            </Flex>
          </Box>
      </Flex>
    </Flex>
    </>
  )
}

export default Contact
