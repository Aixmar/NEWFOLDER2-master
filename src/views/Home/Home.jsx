import React from 'react'
// import Footer from '../../components/Footer/Footer'
import { Flex, Box} from '@chakra-ui/react';
import  {homeStyles} from './homeStyles';
import collection from '../../assets/collection.jpg';

import NavBar from '../../components/NavBar/NavBar';

import Portfolio from '../Portfolio/Portfolio';


const Home = () => {


  return (
    <Flex {...homeStyles.container} height='100%' bg={`linear-gradient(to top, rgba(30,35,38,.8), rgba(30,35,38,1)), url(${collection})`}>
        
        <Flex>
            <NavBar/>
        </Flex>

        <Flex>
            <Portfolio/>
        </Flex>
    

    </Flex>
  );
};


export default Home;
