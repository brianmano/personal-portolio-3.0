import React from 'react';
import {
  ChakraProvider, Box, VStack, HStack, Text, Image, Grid, GridItem, useBreakpointValue,
  IconButton, Tag, TagLabel, TagLeftIcon,
  Flex
} from '@chakra-ui/react';
import '../App.css';
import brian from '../assets/image 2.png';
import colors from '../colors.js';
import { TypeAnimation } from 'react-type-animation';
import { color } from 'framer-motion';
import { SunIcon } from '@chakra-ui/icons';
import "boxicons";

const resume = "https://drive.google.com/file/d/1uJynaa2n6qJ5HVM763F0uXIIiJOwTOQ2/view?usp=sharing";
const emailLink = "mailto:brian.manomaisupat@gmail.com";
const linkedin = "https://www.linkedin.com/in/brian-mano/";
const github = "https://github.com/brianmano";

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
            <Box h = {imageSizeH} w = {imageSizeW  + 10} bg={"#cc0000"} borderRadius={15} overflow="hidden">
              <Image
                src={brian}
                alt="brian"
                w={imageSizeW+10}
                h={imageSizeH}
                objectFit="cover"
              />
            </Box>
        </GridItem>
        <GridItem rowSpan={{ base: 1, md: 1 }} colSpan={{ base: 1, md: 3 }} >
            <VStack h="100%" w="100%" bg={colors.secondaryblack} borderRadius={15} overflow="hidden" p="3" align="left" spacing={1}>
                <Tag backgroundColor={colors.tertiaryblack} textColor="#FFC906" w="55%">
                  <TagLeftIcon as={SunIcon} textColor="#FFC906"/>
                  <TagLabel fontSize = {internFontSize}>Highly motivated to break into motorsport.</TagLabel>
                </Tag>


              <Text className='h1' fontSize={titleFontSize} color={colors.primarywhite}>
                Brian Manomaisupat
              </Text>
              <HStack spacing={2} align="center">
                <Text className="h3" fontSize={buttonFontSize} color={colors.secondarywhite}>
                  I'm a 
                </Text>
                <TypeAnimation
                  sequence={[
                    'Race Telemetry Developer',
                    3000,
                    'Aerodynamics Team Member',
                    3000,
                    'Software Developer',
                    3000,
                    'Vehicle Dynamics Team Member',
                    3000,
                    'Pitcrew Member',
                    3000,
                    'CFD Specialist',
                    3000,
                    'System Design and Integration Team Member',
                    3000,
                    'Car Enthusiast',
                    3000,
                  ]}
                  wrapper="span"
                  speed={25}
                  className="h1"
                  style={{ fontSize: {textFontSize}, color: '#ff3333', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </HStack>
            </VStack>
        </GridItem>


        <GridItem h="100%" w="100%" rowSpan={{ base: 2, md: 7 }} colSpan={{ base: 1, md: 4 }} backgroundColor={colors.tertiaryblack} borderRadius={10}>
          <HStack spacing={spacing} p={spacing} flexWrap="wrap">  
            <Tag p = {2} backgroundColor={colors.secondaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.purple} name='book-alt' type='solid' size="sm" ></box-icon>
                <TagLabel>Bachelors of Engineering</TagLabel>
            </Tag>
            <Tag p = {2} backgroundColor={colors.secondaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.purple} type='solid' name='book-alt'></box-icon>
                <TagLabel>Mechatronics and Biomedical Engineer Student</TagLabel>
            </Tag>
            <Tag p = {2} backgroundColor={colors.secondaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.purple} type='solid' name='school'></box-icon>
                <TagLabel>McMaster University</TagLabel>
            </Tag>
            <Tag p = {2} backgroundColor={colors.secondaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.purple} name='current-location'></box-icon>
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
                bgColor="#242424"
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
                <box-icon color={colors.purple} type='solid' name='file-doc'></box-icon>
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
                bgColor="#242424"
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
                <box-icon color={colors.purple} type='logo' name='linkedin-square'></box-icon>
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
                bgColor="#242424"
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
                <box-icon color={colors.purple} type='solid' name='envelope'></box-icon>
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
                bgColor="#242424"
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
                <box-icon color={colors.purple} type='logo' name='github'></box-icon>
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




      {/* <Box
        height="100%"
        bgColor={colors.secondaryblack}
        borderRadius="15px"
        p={spacing}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >

        <VStack align="center" spacing={spacing} width="100%">
          <HStack spacing={spacing} align="center" justify="center">
            <Box bg={colors.purple} borderRadius={15} over>
              <Image
                src={brian}
                alt="brian"
                boxSize={imageSize}
                objectFit="cover"
              />
            </Box>
            <VStack align="center">
              <HStack spacing={spacing} justify="center">
                <Box
                  height="80%"
                  bgColor="rgba(45,45,45,255)"
                  borderRadius="20px"
                  backdropFilter="blur(10px)"
                  p={2}
                  borderWidth="1px"
                  borderColor={colors.border}
                  borderStyle="solid"
                >
                  <HStack spacing={2} align="center" justify="center">
                    <Box
                      height="10px"
                      width="10px"
                      borderRadius="50%"
                      bgColor="green"
                      boxShadow="0 0 10px green"
                    />
                    <Text
                      fontSize="sm"
                      className="h3"
                      color={colors.secondarywhite}
                    >
                      Looking for Spring/Summer 2025 Internships
                    </Text>
                  </HStack>
                </Box>
              </HStack>
              <Text className="h1" fontSize={textFontSize} color={colors.primarywhite}>
                Brian Manomaisupat
              </Text>
              <HStack spacing={2} align="center">
                <Text className="h3" fontSize="sm" color={colors.secondarywhite}>
                  I'm a 
                </Text>
                <TypeAnimation
                  sequence={[
                    'Wallahi',
                    3000,
                    'gwan',
                    3000,
                  ]}
                  wrapper="span"
                  speed={25}
                  className="h1"
                  style={{ fontSize: '16px', color: '#a290fc', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </HStack>
            </VStack>
          </HStack>

          <Box
            bgColor="rgba(35,35,35,255)"
            borderRadius="10px"
            p={spacing}
            width="100%"
            mb={1}
            textAlign="center"
          >
            <HStack spacing={spacing} justify="center" wrap="wrap">
              <Box
                bgColor={colors.secondaryblack}
                borderRadius="20px"
                p={2}
                borderWidth="1px"
                borderColor={colors.border}
                borderStyle="solid"
              >
                <HStack>
                  <box-icon color={colors.purple} name='current-location'></box-icon>
                  <Text className="h2" color={colors.secondarywhite} fontSize="sm">Hamilton, ON</Text>
                </HStack>
              </Box>
              <Box
                bgColor={colors.secondaryblack}
                borderRadius="20px"
                p={2}
                borderWidth="1px"
                borderColor={colors.border}
                borderStyle="solid"
              >
                <HStack>
                  <box-icon color={colors.purple} type='solid' name='book-alt'></box-icon>
                  <Text className="h2" color={colors.secondarywhite} fontSize="sm">Mechatronics & Biomedical Engineer In Training</Text>
                </HStack>
              </Box>
              <Box
                bgColor={colors.secondaryblack}
                borderRadius="20px"
                p={2}
                borderWidth="1px"
                borderColor={colors.border}
                borderStyle="solid"
              >
                <HStack>
                  <box-icon color={colors.purple} type='solid' name='bookmark-alt'></box-icon>
                  <Text className="h2" color={colors.secondarywhite} fontSize="sm">McMaster University 2021-2026</Text>
                </HStack>
              </Box>
            </HStack>
          </Box>

          <Grid templateColumns='repeat(auto-fill, minmax(200px, 2fr))' gap={spacing} width="100%">
            <GridItem>
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
                  bgColor: colors.purple,
                  boxShadow: '0 0 10px rgba(162, 144, 252, 0.8)',
                }}
              >
                <box-icon color={colors.purple} type='solid' name='file-doc'></box-icon>
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
            <GridItem>
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
                  bgColor: colors.purple,
                  boxShadow: '0 0 10px rgba(162, 144, 252, 0.8)',
                }}
              >
                <box-icon color={colors.purple} type='logo' name='linkedin-square'></box-icon>
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

            <GridItem>
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
                  bgColor: colors.purple,
                  boxShadow: '0 0 10px rgba(162, 144, 252, 0.8)',
                }}
              >
                <box-icon color={colors.purple} type='logo' name='github'></box-icon>
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

            <GridItem>
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
                  bgColor: colors.purple,
                  boxShadow: '0 0 10px rgba(162, 144, 252, 0.8)',
                }}
              >
                <box-icon color={colors.purple} type='solid' name='envelope'></box-icon>
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
          </Grid>
        </VStack>
      </Box> */}
    </ChakraProvider>
  );
};

export default ReachOut;
