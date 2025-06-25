// ReachOut.jsx
import React from 'react';
import {
  ChakraProvider, Box, VStack, Text, Image, Tag, TagLabel, TagLeftIcon, Flex,
  useBreakpointValue
} from '@chakra-ui/react';
import '../App.css';
import brian from '../assets/image 2.png';
import colors from '../colors.js';
import { TypeAnimation } from 'react-type-animation';
import { SunIcon } from '@chakra-ui/icons';
import "boxicons";

const resume = "https://drive.google.com/file/d/1uJynaa2n6qJ5HVM763F0uXIIiJOwTOQ2/view?usp=sharing";
const emailLink = "mailto:brian.manomaisupat@gmail.com";
const linkedin = "https://www.linkedin.com/in/brian-mano/";
const github = "https://github.com/brianmano";

const ReachOut = () => {
  const fontSize = useBreakpointValue({ base: "16px", md: "18px", lg: "20px" });
  const nameFontSize = useBreakpointValue({ base: "26px", md: "32px", lg: "36px" });
  const imageSize = useBreakpointValue({ base: "100px", md: "120px", lg: "140px" });
  const tightSpacing = "10px";

  return (
    <ChakraProvider>
      <VStack
        w="100%"
        h="100%"
        minH="100%"
        align="start"
        justify="start"
        spacing={tightSpacing}
        bg={colors.secondaryblack}
        borderRadius="15"
        p="20px"
      >
        {/* Header */}
        <Flex w="100%" align="center" gap="24px">
          <Box h={imageSize} w={imageSize} bg="#cc0000" borderRadius="15" overflow="hidden">
            <Image src={brian} alt="brian" w="100%" h="100%" objectFit="cover" />
          </Box>
          <VStack spacing="8px" align="start">
            <Tag backgroundColor={colors.tertiaryblack} textColor="#FFC906" px={4} py={2}>
              <TagLeftIcon as={SunIcon} textColor="#FFC906" />
              <TagLabel fontSize={fontSize}>Highly motivated to break into motorsport.</TagLabel>
            </Tag>
            <Text fontSize={nameFontSize} fontWeight="bold" color={colors.primarywhite}>
              Brian Manomaisupat
            </Text>
            <Flex align="center" gap="8px">
              <Text fontSize={fontSize} color={colors.secondarywhite}>I'm a</Text>
              <TypeAnimation
                sequence={[
                  'Race Telemetry Developer', 3000,
                  'Aerodynamics Team Member', 3000,
                  'Software Developer', 3000,
                  'Vehicle Dynamics Team Member', 3000,
                  'Pitcrew Member', 3000,
                  'CFD Specialist', 3000,
                  'System Design and Integration Team Member', 3000,
                  'Car Enthusiast', 3000
                ]}
                wrapper="span"
                speed={25}
                style={{ fontSize: fontSize, color: '#ff3333' }}
                repeat={Infinity}
              />
            </Flex>
          </VStack>
        </Flex>

        {/* Tags */}
        <Flex wrap="wrap" gap="6px" w="100%">
          {[
            "Bachelors of Engineering",
            "Mechatronics and Biomedical Engineer Student",
            "McMaster University",
            "Hamilton, ON"
          ].map((label, idx) => (
            <Tag key={idx} px={3} py={2} bg={colors.secondaryblack} color={colors.secondarywhite} fontSize={fontSize} height="auto">
              <box-icon color={colors.purple} name='book-alt' type='solid'></box-icon>
              <TagLabel ml="2">{label}</TagLabel>
            </Tag>
          ))}
        </Flex>

        {/* Contact Buttons */}
        <Flex wrap="wrap" gap="8px" w="100%">
          {[{ name: 'Resume', icon: 'file-doc', link: resume },
            { name: 'LinkedIn', icon: 'linkedin-square', link: linkedin },
            { name: 'Email', icon: 'envelope', link: emailLink },
            { name: 'GitHub', icon: 'github', link: github }].map((btn, idx) => (
            <Box
              key={idx}
              as="button"
              onClick={() => window.open(btn.link, btn.name === 'Email' ? "_self" : "_blank")}
              flex="1 1 22%"
              bg="#242424"
              borderRadius="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              px="12px"
              py="8px"
              _hover={{ backgroundColor: colors.quinaryblack }}
            >
              <box-icon
                color={colors.purple}
                type={btn.name === 'GitHub' || btn.name === 'LinkedIn' ? 'logo' : 'solid'}
                name={btn.icon}
              ></box-icon>
              <Text ml="2" fontSize={fontSize} color={colors.secondarywhite}>
                {btn.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </VStack>
    </ChakraProvider>
  );
};

export default ReachOut;
