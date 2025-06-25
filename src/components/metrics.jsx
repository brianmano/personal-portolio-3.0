// Metrics.jsx
import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  useBreakpointValue,
  VStack,
  Fade,
} from '@chakra-ui/react';
import '../App.css';
import colors from '../colors.js';

const textLibrary = [
  "Engineered a real-time race telemetry platform @ Scalar Performance",
  "Performing and analyzing system and component-level CFDs @ McMaster EcoCAR",
  "Designing and manufacturing new aerodynamic components (rear wing, etc) @ McMaster EcoCAR",
  "Developed a Google Chrome extension LeetCode AI Assistant for tailored education @ DeltaHacks XI",
  "Redesigned a CPU Heatsink reducing maximum temperatures significantly by 34% @ McMaster EcoCAR",
  "Redesigned the rear subfloor of the Cadillac Lyriq for computer module integration @ McMaster EcoCAR",
  "Engineered an internal thermal system in the Cadillac Lyriq, reducing ambient temps @ McMaster EcoCAR",
  "Developing an accurate suspension model for force extraction @ McMaster EcoCAR",
];

const Metrics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);
  const titleFontSize = useBreakpointValue({ base: '18px', md: '20px', lg: '20px' });
  const textFontSize = useBreakpointValue({ base: '12px', md: '14px', lg: '18px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textLibrary.length);
        setShow(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ChakraProvider>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        p={4}
        pb={6}
      >
        <Text className="h1" fontSize={titleFontSize} color={colors.primarywhite} mb={2}>
          What I've Been Up to Lately...
        </Text>

        <VStack
          w="100%"
          minH="80px"
          maxW="100%"
          align="center"
          justify="center"
          border="1px solid #333"
          borderRadius="md"
          px={4}
          py={4}
          bg={colors.secondaryblack}
        >
          <Fade in={show} key={currentIndex}>
            <Text
              className="h3"
              fontSize={textFontSize}
              color={colors.primarywhite}
              textAlign="center"
              lineHeight="1.6"
              whiteSpace="normal"
              wordBreak="break-word"
              transition="opacity 0.3s ease-in-out"
            >
              {textLibrary[currentIndex]}
            </Text>
          </Fade>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Metrics;