import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Flex, Text, Box, Grid, Image, Heading, Link } from '@chakra-ui/react'
import Mix2Piza from "../../assets/Mix2Pizza.png"
import { AiOutlineLink } from "react-icons/ai";



const Portfolio = () => {

  const proyectos = [
    {
      fecha: "march 2022 - april 2023",
      titulo: "Mix2Pizza",
      descripcion:
        'Mix2Pizza is an E-Commerce website where users can purchase their favorite pizza or even create their own. It includes Authentication, Soft deletion, Persistence,Protected routes,Payment gateway,Reviews, rating, and comments, Profile customization,Admin panel where products can be created, disabled, users can be viewed, and sales charts can be seen, Filtering and sorting, Email notifications.'
      ,
      imagen:'https://i.postimg.cc/bY6yNP82/Mix2-Pizza.png',
      tecnologias: {
        front: ['React | Redux | HTML | Chakra'] ,
        back: ['NextJs(Express) | Nodemailer'],
        DB: ['Sequelize | PostgreSQL'],
        Versions: ['Git | GitHub | GitFlow'],
      },
      URL: "https://mix2pizza.netlify.app/",    
    },
    // {
    //   fecha: "2021-04-01",
    //   titulo: "Countries",
    //   descripcion:
    //     "Este es otro proyecto interesante que hice en abril de 2021",
    //   imagen:
    //     "https://images.unsplash.com/photo-1555597292-7e8786f14a6c",
    //     tecnologias: {
    //       front: ['React | Redux | HTML | Chakra'] ,
    //       back: ['NextJs(Express) | Nodemailer'],
    //       DB: ['Sequelize | PostgreSQL'],
    //       Versions: ['Git | GitHub | GitFlow'],
    //     },
    //     URL: "https://mix2pizza.netlify.app/",
    // },
    {
      fecha: "2021-04-01",
      titulo: "VS design",
      descripcion:
        "Este es otro proyecto interesante que hice en abril de 2021",
      imagen:
        "https://i.postimg.cc/J7Nf1DHh/VSdesign.png",
      tecnologias:{
        front: ['React | Redux | HTML | Chakra'] ,
        back: ['NextJs(Express) | Nodemailer'],
        DB: ['Sequelize | PostgreSQL'],
        Versions: ['Git | GitHub | GitFlow'],
      },
      URL: "https://verasalama.com/",
    },
  ];
  
  
  return (
    <Flex>
      <Box>
        <NavBar/>
      </Box>

      <Box p={4}>
      <Heading as="h1" size="xl" mb={10} color='#6B7379'mt={5}>
        My Portfolio
      </Heading>

      <Grid templateColumns={["1fr", "1fr", "repeat(auto-fit, minmax(50%, 1fr))"]} gap={6}>
        
        {proyectos.map((proyecto) => (
          <Flex
            key={proyecto.titulo}
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            bg="white"
          >

            <Image
              src={proyecto.imagen}
              alt={proyecto.titulo}
              boxSize="300px"
              objectFit="cover"
              height='100%'
              width='100%'
              
            />

            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {proyecto.titulo}
              </Text>
              <Text mb={4}>
                <strong>Date:</strong> {proyecto.fecha}
              </Text>
              <Text>{proyecto.descripcion}</Text>
              
                <Text fontWeight="bold" marginTop={5} >Technologies:</Text>
              <Flex alignItems="center" width="100%" marginBottom={2} >
                <Text>Front:</Text>
                <Text marginLeft={2}>{proyecto.tecnologias.front}</Text>
              </Flex>
              <Flex alignItems="center" width="100%" marginBottom={2} >
                <Text>Back:</Text>
                <Text marginLeft={2}>{proyecto.tecnologias.back}</Text>
              </Flex>
              <Flex alignItems="center" width="100%" marginBottom={2} >
                <Text>DB:</Text>
                <Text marginLeft={2}>{proyecto.tecnologias.DB}</Text>
              </Flex>
              <Flex alignItems="center" width="100%" marginBottom={2} >
                <Text>Versions:</Text>
                <Text marginLeft={2}>{proyecto.tecnologias.Versions}</Text>
              </Flex>


            

              {/* <Link href={proyecto.URL} passHref>
                <Text as="a" mb={4} mt={5} target="_blank">
                  <strong>URL:</strong> {proyecto.URL}
                </Text>
              </Link> */}
             
             <Flex alignItems="center">
              <Link href={proyecto.URL} isExternal>
                <a rel="noopener noreferrer">
                  <Flex alignItems="center">
                    <AiOutlineLink />{" "}
                    <Text ml={5} _hover={{ textDecoration: "underline", color: "black" }}>
                      {proyecto.URL}
                    </Text>
                  </Flex>
                </a>
              </Link>
            </Flex>


            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
    </Flex>
  )
}

export default Portfolio
