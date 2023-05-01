import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import { Flex, Text, Box, Heading } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Flex >
      <NavBar/>
       <Box maxWidth='50%' marginLeft={10} marginBottom={10}>

        <Box bgColor='#6B7379' borderRadius={10} p="5mm" marginTop={5} textAlign='left' marginLeft={2} marginBottom={2}>
             <Heading  color='white'> Where do I come from? </Heading>
        </Box>

        <Text fontSize="l"  color="#6B7379" marginBottom={5}>
          Technology has always been present in my family environment since I was born. On the one hand, I have Japanese descent 🎎, who are very involved in new technologies. On the other hand, my grandfather and father are electronic engineers, so technology has been part of my life since always.
          </Text>

          <Text fontSize="l"  color="#6B7379" marginBottom={5}>
          Thanks to this influence, I developed a great interest in the use and application of technology.
          </Text>

          <Text fontSize="l"  color="#6B7379" marginBottom={5}>
          During my school years, I obtained multiple certifications endorsed by UTN in the field of technology. However, later on, my interest turned towards the artistic and creative field, and I dedicated myself to studying music, musical instruments, dubbing, musical theater, and vocal health. I graduated as a speech therapist from UBA and, in parallel, took multiple design courses, including tools such as Adobe Illustrator, Procreate, and Photoshop 🎨.
          </Text>
          <Text fontSize="l"  color="#6B7379" marginBottom={5}>
          As my circle of friends expanded to include programmers and computer engineers, my interest in the subject grew 💻. Finally, at the end of 2022, I took the courage and completed the Henry pre-entry course to test my programming skills. Now, I am excited to continue learning and developing my skills as a Full Stack developer.
          </Text>
          <Text fontSize="l"  color="#6B7379" marginBottom={5}>
          In addition, I have a great interest in the field of design, especially in creating attractive and functional user interfaces, and in user experience.

        <Box bgColor='#6B7379' borderRadius={10} p="5mm" marginTop={5} textAlign='left' marginLeft={2} marginBottom={2}>
             <Heading  color='white'>  What do I do? </Heading>
        </Box>
         
          I am constantly training myself, I like to learn new technologies and delve deeper into the ones I have already learned.

          <Box bgColor='#6B7379' borderRadius={10} p="5mm" marginTop={5} textAlign='left' marginLeft={2} marginBottom={2}>
             <Heading  color='white'>  Where am I heading? </Heading>
        </Box>
          
          My goal is to develop my skills in both Front End and Design, to be able to combine both fields and create digital products that are attractive, intuitive, and satisfying for users.

          <Box bgColor='#6B7379' borderRadius={10} p="5mm" marginTop={5} textAlign='left' marginLeft={2} marginBottom={2}>
             <Heading  color='white'>  What technologies do I use? </Heading>
        </Box>
          
          JavaScript | ReactJS | CSS | HTML | SQL | NodeJS | Express | Sequelize | MongoDB
        </Text>
     </Box>
    </Flex>
  )
}

export default AboutMe;
