import React from 'react';
import {
  ChakraProvider, Box, VStack, HStack, Text, Image, Grid, GridItem, useBreakpointValue,
  IconButton, Tag, TagLabel, TagLeftIcon,
  Flex
} from '@chakra-ui/react';
import '../App.css';
import connor from '../assets/connor-background-free.png';
import colors from '../colors.js';
import { TypeAnimation } from 'react-type-animation';
import { color } from 'framer-motion';
import { SunIcon } from '@chakra-ui/icons';
import "boxicons";

const resume = "https://drive.google.com/file/d/1f2vHwPw8q6RH-RZV2YdKJHipimYksrXi/view?usp=sharing";
const emailLink = "mailto:c3irvine@uwaterloo.ca";
const linkedin = "https://www.linkedin.com/in/connor-john-irvine/";
const github = "https://github.com/ConnorIrvine";

const ReachOut = () => {
  // Responsive font size and spacing values
  const textFontSize = useBreakpointValue({ base: '8px', md: '14px', lg: '32px' });
  const internFontSize = useBreakpointValue({ base: '7px', md: '14px', lg: '14px' });
  const titleFontSize = useBreakpointValue({ base: '28px', md: '18px', lg: '40px' });
  const buttonFontSize = useBreakpointValue({ base: '10px', md: '10px', lg: '14px' });
  const spacing = useBreakpointValue({ base: 3, md: 1, lg: 3 });

  // Responsive image size
  const imageSizeW = useBreakpointValue({ base: '80px', md: '120px', lg: '140px' });
  const imageSizeH = useBreakpointValue({ base: '450px', md: '100px', lg: '140px' });

  return (
    <ChakraProvider>
        <Grid
        position="relative"
        h="100%"
        w="100%"
        backgroundColor={colors.secondaryblack}
        templateRows={{ base: "1fr", md: "repeat(12, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={spacing}
        p={spacing}
        borderRadius={15}
        transition="all 0.3s ease" 
      >
        <GridItem rowSpan={{ base: 1, md: 1 }} colSpan={{ base: 1, md: 1 }}>
            <Box h = {imageSizeH} w = {imageSizeW  + 10} bg={colors.blue} borderRadius={15} overflow="hidden">
              <Image
                src={connor}
                alt="connor"
                w={imageSizeW+10}
                h={imageSizeH}
                objectFit="cover"
              />
            </Box>
        </GridItem>
        <GridItem rowSpan={{ base: 1, md: 1 }} colSpan={{ base: 1, md: 3 }} >
            <VStack h="100%" w="100%" bg={colors.secondaryblack} borderRadius={15} overflow="hidden" p="3" align="left" spacing={1}>
                <Tag backgroundColor={colors.tertiaryblack} textColor={colors.primarywhite} w="55%">
                  <TagLeftIcon as={SunIcon} textColor="orange"/>
                  <TagLabel fontSize = {internFontSize}>Looking for Winter and Summer 2025 Interships</TagLabel>
                </Tag>


              <Text className='h1' fontSize={titleFontSize} color={colors.primarywhite}>
                Connor Irvine
              </Text>
              <HStack spacing={2} align="center">
                <Text className="h3" fontSize={buttonFontSize} color={colors.secondarywhite}>
                  I'm a 
                </Text>
                <TypeAnimation
                  sequence={[
                    'Backend Developer',
                    3000,
                    'Web Application Developer',
                    3000,
                    'Biomedical Engineering Student',
                    3000,
                  ]}
                  wrapper="span"
                  speed={25}
                  className="h1"
                  style={{ fontSize: {textFontSize}, color: '#1dc5b4', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </HStack>
            </VStack>
        </GridItem>


        <GridItem h="100%" w="100%" rowSpan={{ base: 2, md: 7 }} colSpan={{ base: 1, md: 4 }} backgroundColor={colors.tertiaryblack} borderRadius={10}>
          <HStack spacing={spacing} p={spacing} flexWrap="wrap">  
            <Tag p = {2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} name='book-alt' type='solid' size="sm" ></box-icon>
                <TagLabel>Bachelors of Applied Science</TagLabel>
            </Tag>
            <Tag p = {2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} type='solid' name='book-alt'></box-icon>
                <TagLabel>Biomedical Engineering</TagLabel>
            </Tag>
            <Tag p = {2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} type='solid' name='school'></box-icon>
                <TagLabel>University of Waterloo</TagLabel>
            </Tag>
            <Tag p = {2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} name='current-location'></box-icon>
                <TagLabel>Hamilton, ON</TagLabel>
            </Tag>
          </HStack>
        </GridItem>
        <GridItem h="100%" w="100%" rowSpan={{ base: 2, md: 1 }} colSpan={{ base: 1, md: 1 }}>
        <Box
                as="button"
                onClick={() => window.open(resume, "_blank")}
                height="auto"
                width="100%"
                bgColor="rgba(35,35,35,255)"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="0.3s"
                p={spacing}
                _hover={{
                  boxShadow: "lg",
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: colors.quinaryblack,
                }}
              >
                <box-icon color={colors.blue} type='solid' name='file-doc'></box-icon>
                <Text
                  ml="2"
                  fontSize={buttonFontSize}
                  color={colors.secondarywhite}
                  className="h3"
                >
                  Resume
                </Text>
              </Box>
        </GridItem>
        <GridItem h="100%" w="100%" rowSpan={{ base: 2, md: 1 }} colSpan={{ base: 1, md: 1 }}>
        <Box
                as="button"
                onClick={() => window.open(linkedin, "_blank")}
                height="auto"
                width="100%"
                bgColor="rgba(35,35,35,255)"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="0.3s"
                p={spacing}
                _hover={{
                  boxShadow: "lg",
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: colors.quinaryblack,
                }}
              >
                <box-icon color={colors.blue} type='logo' name='linkedin-square'></box-icon>
                <Text
                  ml="2"
                  fontSize={buttonFontSize}
                  color={colors.secondarywhite}
                  className="h3"
                >
                  LinkedIn
                </Text>
              </Box>
        </GridItem>
        <GridItem h="100%" w="100%" rowSpan={{ base: 2, md: 1 }} colSpan={{ base: 1, md: 1 }}>
        <Box
                as="button"
                onClick={() => window.open(emailLink, "_self")}
                height="auto"
                width="100%"
                bgColor="rgba(35,35,35,255)"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="0.3s"
                p={spacing}
                _hover={{
                  boxShadow: "lg",
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: colors.quinaryblack,
                }}
              >
                <box-icon color={colors.blue} type='solid' name='envelope'></box-icon>
                <Text
                  ml="2"
                  fontSize={buttonFontSize}
                  color={colors.secondarywhite}
                  className="h3"
                >
                  Email
                </Text>
              </Box>
        </GridItem>
        <GridItem h="100%" w="100%" rowSpan={{ base: 2, md: 1 }} colSpan={{ base: 1, md: 1 }}>
        <Box
                as="button"
                onClick={() => window.open(github, "_blank")}
                height="auto"
                width="100%"
                bgColor="rgba(35,35,35,255)"
                borderRadius="10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="0.3s"
                p={spacing}
                _hover={{
                  boxShadow: "lg",
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: colors.quinaryblack,
                }}
              >
                <box-icon color={colors.blue} type='logo' name='github'></box-icon>
                <Text
                  ml="2"
                  fontSize={buttonFontSize}
                  color={colors.secondarywhite}
                  className="h3"
                >
                  GitHub
                </Text>
              </Box>
        </GridItem>
        
      </Grid>
    </ChakraProvider>
  );
};

export default ReachOut;
