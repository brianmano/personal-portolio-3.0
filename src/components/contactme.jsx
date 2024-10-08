import React from 'react';
import {
  ChakraProvider, Box, VStack, Text, Grid, GridItem, Flex, useBreakpointValue,
  HStack
} from '@chakra-ui/react';
import '../App.css';
import colors from '../colors.js';

const resume = "https://drive.google.com/file/d/1q6sITnvTjJQpHgGuAHlJx_U3ySFROxPy/view?usp=sharing";
const emailLink = "mailto:c3irvine@uwaterloo.ca";
const linkedin = "https://www.linkedin.com/in/connor-john-irvine/";
const github = "https://github.com/ConnorIrvine";

const ContactMe = () => {

  // Responsive font size and spacing values
  const titleFontSize = useBreakpointValue({ base: '16px', md: '20px', lg: '24px' });
  const spacing = useBreakpointValue({ base: 1, md: 1, lg: 0 });
  const smallFontSize = useBreakpointValue({ base: '12px', md: '10px', lg: '14px' });

  return (
    <ChakraProvider>
      <Grid
        h="100%"
        w="100%"
        templateRows={{ base: "1fr"}}
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)",lg: "1fr"}}
        p={3}
        gap={0}
        
      >
        <GridItem rowSpan={{ base: 1, md: 1, lg: 1 }} colSpan={{ base: 1, md: 4, lg: 1 }} >
          <HStack>
          <Text className="h1" fontSize={titleFontSize} color={colors.primarywhite} >
            Contact Me 
          </Text>
          <box-icon color={colors.blue} size="md" name='message-square-dots' animation="tada-hover"></box-icon>
          </HStack>
        </GridItem>
        <GridItem justifySelf="left" rowSpan={{ base: 1, md: 1, lg: 1 }} colSpan={{ base: 1, md: 1, lg: 2 }} >
        <Box
                as="button"
                onClick={() => window.open(emailLink, "_self")}
                height="auto"
                width="100%"
                bgColor="transparent" // Transparent background
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="0.3s"
                p={spacing}
                border="2px solid transparent" // Add a border to ensure space around button

              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <box-icon color={colors.blue} type='solid' name='envelope'></box-icon>
                  <Text
                    ml="2"
                    fontSize={smallFontSize}
                    color={colors.secondarywhite}
                    className="h3"
                    transition="0.3s"
                    _hover={{
                      textColor: "white" // Glow effect on text hover
                    }}
                  >
                    c3irvine@uwaterloo.ca
                  </Text>
                </Box>
              </Box>
        </GridItem>
        <GridItem justifySelf="left">
        <Box
                as="button"
                onClick={() => window.open(emailLink, "_self")}
                height="auto"
                width="100%"
                bgColor="transparent" // Transparent background
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="0.3s"
                p={spacing}
                border="2px solid transparent" // Add a border to ensure space around button

              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <box-icon color={colors.blue} type='solid' name='phone'></box-icon>
                  <Text
                    ml="2"
                    fontSize={smallFontSize}
                    color={colors.secondarywhite}
                    className="h3"
                    transition="0.3s"
                    _hover={{
                      textColor: "white" // Glow effect on text hover
                    }}
                  >
                    +1 (905)-541-2764
                  </Text>
                </Box>
              </Box>
        </GridItem>
        <GridItem rowSpan={{ base: 1, md: 1, lg: 1 }} colSpan={{ base: 1, md: 1, lg: 2 }}>
        <Box
                  as="button"
                  onClick={() => window.open(linkedin, "_blank")}
                  height="auto"
                  bgColor="transparent" // Transparent background
                  borderRadius="10px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="0.3s"
                  p={spacing}
                  border="2px solid transparent" // Add a border to ensure space around button
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <box-icon color={colors.blue} type='logo' name='linkedin-square'></box-icon>
                    <Text
                    ml="2"
                    fontSize={smallFontSize}
                    color={colors.secondarywhite}
                    className="h3"
                    transition="0.3s"
                    _hover={{
                      textColor: "white" // Glow effect on text hover
                    }}
                  >
                    connor-john-irvine
                  </Text>
                  </Box>
                </Box>
        </GridItem>
        <GridItem rowSpan={{ base: 1, md: 1, lg: 1 }} colSpan={{ base: 1, md: 1, lg: 2 }}>
        <Box
                  as="button"
                  onClick={() => window.open(github, "_blank")}
                  height="auto"
                  bgColor="transparent" // Transparent background
                  borderRadius="10px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="0.3s"
                  p={spacing}
                  border="2px solid transparent" // Add a border to ensure space around button
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <box-icon color={colors.blue} type='logo'size="sm" name='github' ></box-icon>
                    <Text
                    ml="2"
                    fontSize={smallFontSize}
                    color={colors.secondarywhite}
                    className="h3"
                    transition="0.3s"
                    _hover={{
                      textColor: "white" // Glow effect on text hover
                    }}
                  >
                    ConnorIrvine
                  </Text>
                  </Box>
                </Box>
        </GridItem>
        
      </Grid>
    </ChakraProvider>
  );
};

export default ContactMe;
