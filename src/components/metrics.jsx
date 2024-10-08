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
  "Developed a user-friendly website enabling employees to access volunteer hour certificates and streamlined form management for the Community Impact team @ FirstOntario Credit Union",
  "Automated the volunteer certificate distribution process, saving over 20 administrative hours per employee monthly @ FirstOntario Credit Union",
  "Streamlined coaching form management by automating form transfers for staff changes, enhancing data accuracy and efficiency @ FirstOntario Credit Union",
  "Implemented automated test cases with Python and Selenium, doubling output and reducing test case failures by 15% @ Telus Health",
  "Led the migration of thousands of customers and staff to Miovision's identity service platform, improving system scalability @ Miovision",
  "Developed Kotlin-based decoder services to extract traffic data and populate metrics in Traffop, scaling to cities across Canada @ Miovision",
  "Streamlined user authorization logic using asynchronous C# methods, reducing code complexity by over 75% @ Medchart",
  "Connected Marble API to medical record databases weeks ahead of schedule, improving efficiency in accessing records @ Medchart"
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
        Work I've Done Lately
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
