import React from 'react';
import Slider from 'react-slick';
import {
  ChakraProvider,
  Box,
  Text,
  useBreakpointValue,
  Center,
  VStack
} from '@chakra-ui/react';
import '../App.css';
import colors from '../colors.js';

//Texts library
const textLibrary = [
  "Engineered a real-time race telemetry platform for processing CANBus data collection for 1000s of fleet race cars @ Scalar Performance",
  "Performing and analyzing system and component-level CFDs @ McMaster EcoCAR",
  "Designing and manufacturing new aerodynamic components (rear wing, splitters, etc) @ McMaster EcoCAR",
  "Developed a Google Chrome extension LeetCode AI Assistant, supporting tailored help for 3500+ problems  @ DeltaHacks XI",
  "Redesigned a CPU Heatsink reducing maximum temperatures significantly by 34% @ McMaster EcoCAR",
  "Redesigned the rear subfloor of the Cadillac Lyriq for computer module and inverter integration @ McMaster EcoCAR",
  "Engineered a new internal thermal system in the Cadillac Lyriq, reducing ambient temperatures significantly @ McMaster EcoCAR",
  "Developing an accurate suspension model for force extraction under driving scenarios @ McMaster EcoCAR",
];

// Settings for react-slick
const carouselSettings = {
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 5000, // Adjust the speed of auto-scrolling here
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Disable arrows if you don't want navigation buttons
  dots: true,
  pauseOnDotsHover: true,
};

const Metrics = () => {
  // Responsive font size
  const titleFontSize = useBreakpointValue({ base: '16px', md: '20px', lg: '20px' });
  const textFontSize = useBreakpointValue({ base: '12px', md: '12px', lg: '16px' });

  return (
    <ChakraProvider>
      <Box
        width="100%" // Full width of the parent container
        height="100%"
        display="flex"
        flexDirection="column" // Stack the text and sliders vertically
        alignItems="left" // Center everything horizontally
        justifyContent="flex-start" // Align content at the top
        p={4} // Add padding from the top
      >
        <Text className="h1" fontSize={titleFontSize} color={colors.primarywhite} mb = {5}>
        What I've Been Up to Lately...
        </Text>
        <VStack>
        <Slider {...carouselSettings} style={{ height: '100%', width: '100%' }}>
          {textLibrary.map((text, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              <Text 
                className="h3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={textFontSize}
                color={colors.primarywhite}
                textAlign="center" // Center text horizontally
                padding="0 20px" // Optional: add padding to ensure text isn't too close to the edges
              >
                {text}
              </Text>
            </Box>
          ))}
        </Slider>
        </VStack>

      </Box>
    </ChakraProvider>
  );
};

export default Metrics;
