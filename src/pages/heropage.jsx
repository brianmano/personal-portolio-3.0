import React, { useState } from 'react';
import {
  ChakraProvider, Box, VStack, HStack, Text, Image, Flex, Button
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import '../app.css';
import brian from '../assets/brian.png';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const HeroPage = () => {
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  const handlemainpagebrian = () => {
    setIsLeaving(true);
    setTimeout(() => {
      navigate('/mainpagebrian');
    }, 1000); // Match this duration with your animation duration
  };

  return (
    <ChakraProvider>
      <Flex
        direction="row"
        align="center"
        justify="center"
        minHeight="100vh"
        width="100%"
        padding={4}
        className={isLeaving ? 'swipe-out' : ''}
      >
        <Box width="100%" maxWidth="1200px">
          <HStack spacing={2} align="flex-start" justify="center">
            <VStack align="flex-start" spacing={4} maxWidth="70%">
              <TypeAnimation
                sequence={[
                  'Hello!',      
                  3000, 
                  'Hola!',       
                  3000,
                  'Bonjour!',    
                  3000,
                  'Hallo!',      
                  3000,
                  'Ciao!',       
                  3000,
                  'Olá!',        
                  3000,
                  'こんにちは!',  
                  3000,
                  '안녕하세요!',   
                  3000,
                  '你好!',       
                  3000,
                  'Здравствуйте!', 
                  3000,
                  'Hej!', 
                  3000,
                ]}
                wrapper="span"
                speed={25}
                className="h1"
                style={{ fontSize: '70px', color: 'white', display: 'inline-block' }}
                repeat={Infinity}
              />
              <Flex direction="column" align="left" mt={-3}>
                <Text className="h10" fontSize="50px" color="white" mb={-5}>
                  I'm
                </Text>
                <Text className="h10" fontSize="70px" color="yellow.400" display="inline">
                  Brian Manomaisupat
                </Text>
              </Flex>
              <Text className="h2" fontSize="20px" color="white" mt={-5}>
                Mechatronics and Biomedical Engineering @ McMaster University
              </Text>
              <Text className="h3" fontSize="20px" color="white" ml={10} mt={10}>
                I am an enthusiastic engineer-in-training trying to make a positive impact on the world through engineering by continually learning and applying innovative solutions. 
                I am eager to contribute my skills and dedication to a dynamic team and committed to embracing challenges and pushing the boundaries of what I can achieve.
              </Text>
              
              <Button
                className="h1i"
                onClick={handlemainpagebrian}
                colorScheme="yellow"
                variant="link"
                rightIcon={<ArrowRightIcon boxSize={3} />}
                fontSize="35px"
                fontWeight="bold"
                mt={5}
                ml={10}
                _hover={{ textDecoration: 'underline' }}
                textDecoration="underline" 
              >
                View More
              </Button>
            </VStack>
            <Image
              src={brian}
              alt="brian"
              boxSize="500px"
              objectFit="cover"
            />
          </HStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default HeroPage;
