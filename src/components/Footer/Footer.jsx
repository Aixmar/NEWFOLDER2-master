import React from 'react'
import {footerStyles, titleStyles, textStyles} from './footerStyles'
import { Box , Flex, Image, Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box {...footerStyles}>
    <Flex wrap="wrap" justifyContent="space-between" mb={8}>
      <Box flex="1">
        <Text {...titleStyles}>Contact</Text>
        <Text {...textStyles}>aixamarianag@gmail.com</Text>
        <Flex mt={4}>

        {/* <Link to="https://www.facebook.com/pizzeriaguerrin/" target="_blank">
          <Image boxSize="30px" src={fb} mr={4} />
        </Link> */}

    

        </Flex>
      </Box>
      <Box flex="1">
        <Text {...titleStyles}>About Me</Text>

      {/* <Link to="/ourstory" >
        <Text {...textStyles}>Our history</Text>
      </Link> */}

        {/* <Text {...textStyles}  cursor="pointer"  >Work with us</Text>
        {showModal && <CustomModal onClose={() => setShowModal(false)} />}
        <Text {...textStyles}>franchise yourself</Text> */}
      </Box>
      <Box flex="1">
        <Text {...titleStyles}>Nutrition and Quality</Text>
        <Text {...textStyles}>Without gluten ✓</Text>
        <Text {...textStyles}>Nutritional values ✓ </Text>
        <Text {...textStyles}>Quality food ✓</Text>
      </Box>
    </Flex>
    <Box textAlign="center">
   
    </Box>
  </Box>
  )
}

export default Footer
