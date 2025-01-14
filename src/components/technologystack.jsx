import React from 'react';
import Slider from 'react-slick';
import {
  ChakraProvider,
  Box,
  Text,
  useBreakpointValue,
  VStack,
  HStack,
  Spacer,
  Container,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import '../App.css';
import colors from '../colors.js';

// Texts library with icons (using boxicon class names)
const techLibrary = [
  { name: "C", icon: 'bx bxl-c-plus-plus' },
  { name: "C++", icon: 'bx bxl-c-plus-plus' },
  { name: "Python", icon: 'bx bxl-css3' },
  { name: "CSS", icon: 'bx bxl-css3' },
  { name: "HTML5", icon: 'bx bxl-html5' },
  { name: "JavaScript", icon: 'bx bxl-javascript' },
  { name: "VBScript", icon: 'bx bxl-check-square' },
  { name: "SQL", icon: 'bx bxl-check-square' },
  { name: "Matlab", icon: 'bx bxl-check-square' },
];
const cadLibrary = [
  { name: "Siemens NX", icon: 'bx bxs-check-square' },
  { name: "CFD", icon: 'bx bxs-check-square' },
  { name: "SolidWorks", icon: 'bx bxs-check-square' },
  { name: "Fusion360", icon: 'bx bxs-check-square' },
  { name: "Inventor", icon: 'bx bxs-check-square'},
  { name: "AutoCAD", icon: 'bx bxs-check-square' },
  { name: "Altair Hypermesh", icon: 'bx bxs-check-square' },
  { name: "Altair MotionSolve", icon: 'bx bxs-check-square'},
];
const toolsLibrary = [
  { name: "AWS", icon: 'bx bx-data' },
  { name: "Azure", icon: 'bx bx-data' },
  { name: "Kafka", icon: 'bx bx-data' },
  { name: "Azure", icon: 'bx bx-data' },
  { name: "InfluxDB", icon: 'bx bx-data' },
  { name: "Docker", icon: 'bx bx-data' },
  { name: "Kubernetes", icon: 'bx bx-data' },
  { name: "Generative AI", icon: 'bx bx-data' },
  { name: "Git", icon: 'bx bx-git-commit' },
  { name: "Linux", icon: 'bx bx-terminal' },
  { name: "CANBus", icon: 'bx bx-car' },
  { name: ".NET", icon: 'bx bx-data' },
];

// Settings for react-slick
const carouselSettings = {
  infinite: true,
  speed: 6000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

const carouselSettingsReverse = {
  ...carouselSettings,
  rtl: true,
};

const TechnologyStack = () => {
  const textFontSize = useBreakpointValue({ base: '12px', md: '8px', lg: '16px' });
  const maxWidth = useBreakpointValue({ base: '200px', md: '300px', lg: '441px' });
  const spacing = useBreakpointValue({ base: 4, md: 3, lg: 4 });
  const carouselWidth = useBreakpointValue({ base: "80%", md: "85%", lg: "100%" });

  return (
    <ChakraProvider width="100%">
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="flex-start"
        maxW = "100%"
      >
        <Text
          className="h1"
          fontSize="20px"
          color={colors.primarywhite}
          p={spacing}
          mb={spacing}
        >
          Technology Stack
        </Text>

        {/* Sliders */}
        <Box width="100%" p = {5}>
          <VStack spacing={spacing} width="100%"  alignItems="center" overflow="hidden">
            {/* First Slider */}
            <Slider {...carouselSettings} style={{ width: '100%', maxWidth: '441px' }}>
              {techLibrary.map((item, index) => (
                <Wrap
                  key={index}
                  spacing = '10px'
                >
                  <WrapItem
                    bgColor="rgba(8,15,32,255)"
                    borderRadius="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    width="90%"
                    p = {spacing}
                  >
                    <HStack align="center" justify="center">
                      {/* Icon as Box with className */}
                      <Box as="i" className={item.icon} size="24px" color={colors.purple} /> 
                      <Text
                        className="h2"
                        fontSize={textFontSize}
                        color={colors.secondarywhite}
                        textAlign="center"
                        padding="0 0px"
                        whiteSpace="nowrap"
                      >
                        {item.name}
                      </Text>
                    </HStack>
                  </WrapItem>
                </Wrap>
              ))}
            </Slider>

            {/* Second Slider (reverse direction) */}
            <Slider {...carouselSettingsReverse} style={{ width: '100%', maxWidth: '441px' }}>
              {cadLibrary.map((item, index) => (
                <Wrap
                  key={index}
                  spacing = '10px'
                >
                  <WrapItem
                    bgColor="rgba(8,15,32,255)"
                    borderRadius="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    width="90%"
                    p = {spacing}
                  >
                    <HStack align="center" justify="center">
                      {/* Icon as Box with className */}
                      <Box as="i" className={item.icon} size="24px" color={colors.purple} /> 
                      <Text
                        className="h2"
                        fontSize={textFontSize}
                        color={colors.secondarywhite}
                        textAlign="center"
                        padding="0 0px"
                        whiteSpace="nowrap"
                      >
                        {item.name}
                      </Text>
                    </HStack>
                  </WrapItem>
                </Wrap>
              ))}
            </Slider>

            {/* Third Slider */}
            <Slider {...carouselSettings} style={{ width: '100%', maxWidth: '441px' }}>
              {toolsLibrary.map((item, index) => (
                <Wrap
                  key={index}
                  spacing = '10px'
                >
                  <WrapItem
                    bgColor="rgba(8,15,32,255)"
                    borderRadius="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    width="90%"
                    p = {spacing}
                  >
                    <HStack align="center" justify="center">
                      {/* Icon as Box with className */}
                      <Box as="i" className={item.icon} size={textFontSize} color={colors.purple} /> 
                      <Text
                        className="h2"
                        fontSize={textFontSize}
                        color={colors.secondarywhite}
                        textAlign="center"
                        padding="0 0px"
                        whiteSpace="nowrap"
                      >
                        {item.name}
                      </Text>
                    </HStack>
                  </WrapItem>
                </Wrap>
              ))}
            </Slider>
          </VStack>
        </Box>

      </Box>
    </ChakraProvider>
  );
};

export default TechnologyStack;
