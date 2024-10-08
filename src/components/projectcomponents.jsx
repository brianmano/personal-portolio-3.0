import React from 'react';
import {
  ChakraProvider, Box, VStack, Text, IconButton, Center, HStack, Spacer, Button
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projectDataRehabilitation = {
  name: "",
  description: "",
  navigateTo: '',
  images: [],
  tags: []
};

const projectDataEMG = {
  name: "",
  description: "",
  navigateTo: '',
  images: [],
  tags: []
};

const projectDataPantryPal = {
  name: "",
  description: "",
  navigateTo: '', // Internal navigation
  externalLink: '', // External link (optional)
  images: [],
  tags: []
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    aria-label="Next"
    icon={<ArrowRightIcon boxSize={8} />}
    position="absolute"
    top="30%" // Center vertically
    right="10px"
    zIndex={1}
    onClick={onClick}
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'transparent' }}
    _active={{ backgroundColor: 'transparent' }}
  />
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    aria-label="Previous"
    icon={<ArrowLeftIcon boxSize={8} />}
    position="absolute"
    top="30%" // Center vertically
    left="10px"
    zIndex={1}
    onClick={onClick}
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'transparent' }}
    _active={{ backgroundColor: 'transparent' }}
  />
);



const Project = ({ projectData }) => {
  const navigate = useNavigate();

  const handleProjectNavigation = () => {
    if (projectData.externalLink) {
      window.open(projectData.externalLink, '_blank'); // Opens external link in new tab
    } else {
      navigate(projectData.navigateTo); // Internal navigation
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ChakraProvider>
      <VStack spacing={6} alignItems="flex-start">
        <HStack spacing={4} w="full" alignItems="center">
          <Text className="h1" fontSize="30px" color="white" textAlign="left">
            {projectData.name}
          </Text>
          <Spacer />
          <HStack spacing={2}>
            {projectData.tags.map((tag, index) => (
              <Box key={index} bg="teal.500" color="white" p={2} borderRadius="md" fontSize="sm">
                {tag}
              </Box>
            ))}
          </HStack>
        </HStack>

        <Center w="100%">
          <Box w="90vh"  h="45vh"  borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Slider {...settings}>
              {projectData.images.map((image, index) => (
                <VStack key={index}>
                  <Text
                    bg="rgba(0, 0, 0, 0.1)"
                    align = "center"
                    color="white"
                    pl={1}
                    className="h3"
                    fontSize="sm"
                  >
                    {image.caption}
                  </Text>
                  <img src={image.src} alt={`Slide ${index + 1}`} width="100%" />
                </VStack>
              ))}
            </Slider>
          </Box>
        </Center>

        <Text className="h3" fontSize="18px" color="white" textAlign="left">
          {projectData.description}
        </Text>

        <HStack w="full" justify="flex-end">
          <Button
            className="h1"
            onClick={handleProjectNavigation}
            color="white"
            variant="link"
            rightIcon={<ArrowRightIcon boxSize={3} />}
            fontSize="20px"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
            textDecoration="underline"
            mr={5}
          >
            View More
          </Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};


const Project_Rehabilitation = () => (
  <Project projectData={projectDataRehabilitation} />
);

const Project_EMG = () => (
  <Project projectData={projectDataEMG} />
);

const Project_PantryPal = () => (
  <Project projectData={projectDataPantryPal} />
);


export { Project_Rehabilitation, Project_EMG, Project_PantryPal };
