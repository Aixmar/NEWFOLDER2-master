import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

function CustomModal(props) {

    const email = "aixamarianag@gmail.com";
    const subject = "Aixa, I want to contact you";
    const body = "Hola..";
  
    const handleEmailClick = (event) => {
      event.preventDefault();
      const url = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
      window.open(url, "_blank");
    };


  return (
    <Modal isOpen={true} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Me!</ModalHeader>
        <ModalBody>
          <Text>Please send me an email </Text>
          
          <Text fontWeight="bold"  color="blue.500" cursor="pointer" onClick={handleEmailClick}><u>{email}</u></Text>
          
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
       
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;

