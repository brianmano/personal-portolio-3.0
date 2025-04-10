import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Text, Center, Wrap, WrapItem, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, IconButton, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import '../App.css'; // Ensure this imports slick-carousel CSS
import colors from '../colors.js';

// Define constants for experiences directly in the file
const employmentExperiences = [
  {
    role: "Aerodynamics Design Engineer Intern",
    company: "Oilstainlab",
    date: "May 2025 - Present",
    description: "Designing and validating underbody aerodynamic changes to the HF-11, conducting CFD studies.",
  },
  {
    role: "Telemetry Platform Developer",
    company: "Scalar Performance Inc",
    date: "May 2024 - September 2024",
    description: "Led the software and hardware engineering of an F1 capable real-time telemetry platform and cloud storage, scalable amongst thousands of vehicles.",
  },
  {
    role: "Aerodynamics and Vehicle Dynamics Team Member",
    company: "McMaster EcoCAR EV Challenge",
    date: "September 2024 - Present",
    description: "Performing component and system-level CFDs, and designing new aerodynamic parts to maximize driving endurance.",
  },
  {
    role: "Quality Engineer Intern",
    company: "Linamar Corporation",
    date: "May 2023 - August 2023",
    description: "Implemented automated scripts reducing runtimes by 90%, and enhanced ergonomics and safety in shelf design.",
  },
  {
    role: "System Design and Integration Team Member",
    company: "McMaster EcoCAR EV Challenge",
    date: "September 2023 - September 2024",
    description: "Developed an internal thermal system and rear tub to accomodate computer modules temperature and integration.",
  },
  {
    role: "Civil Engineer Intern",
    company: "Urbex Engineering Limited",
    date: "May 2022 - August 2022",
    description: "Adjusted engineering drawings based on real-world conditions and managed accuracy of engineering tenders.",
  }
];

const VerticalCarousel = ({ items }) => {
  const [autoplay, setAutoplay] = useState(true);

  // Responsive breakpoints for height and number of slides
  const carouselHeight = useBreakpointValue({ base: '300px', md: '500px', lg: '600px' });
  const slidesToShow = useBreakpointValue({ base: 3, md: 2, lg: 4 });
  const carouselWidth = useBreakpointValue({ base: "80%", md: "85%", lg: "100%" });

  const settings = {
    vertical: true,
    infinite: true,
    speed: 4000,
    slidesToShow, // Adjust slides to show based on screen size
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 0,
    pauseOnHover: true, 
    arrows: true, 
    dots: false,  
  };

  const roleFontSize = useBreakpointValue({ base: '14px', md: '18px', lg: '20px' });
  const companyFontSize = useBreakpointValue({ base: '12px', md: '16px', lg: '18px' });
  const dateFontSize = useBreakpointValue({ base: '10px', md: '14px', lg: '16px' });
  const spacing = useBreakpointValue({ base: 2, md: 3, lg: 3 });

  return (
    <Box height={carouselHeight} width={carouselWidth} overflow="hidden"> {/* Adjust height for responsiveness */}
      <Slider
        {...settings}
        onMouseEnter={() => setAutoplay(false)} // Pause autoplay on hover
        onMouseLeave={() => setAutoplay(true)}  // Resume autoplay on mouse leave
      >
        {items.map((item, index) => (
          <Center key={index}>
            <Popover>
              {({ isOpen, onClose }) => {
                // Automatically close the popover after 3 seconds
                useEffect(() => {
                  if (isOpen) {
                    const timer = setTimeout(onClose, 10000); 
                    return () => clearTimeout(timer); // Clear timeout on component unmount
                  }
                }, [isOpen, onClose]);

                return (
                  <>
                    <PopoverTrigger>
                      <Box
                        className="carousel-item"
                        position="relative"
                      >
                        <Wrap spacing={spacing} mx={4} my={2}>
                          <WrapItem
                            bgColor="#242424"
                            borderRadius="10px"
                            display="flex"
                            height="100%"
                            width="100%"
                            p={spacing}
                            position="relative"
                            className="carousel-item-content"
                          >
                            <VStack spacing={1} align="start">
                              <Text className="h2" color={colors.primarywhite} fontSize={roleFontSize}>{item.role}</Text>
                              <Text className="h3" color={colors.primarywhite} fontSize={companyFontSize}>{item.company}</Text>
                              <Text className="h3" color={colors.secondarywhite} fontSize={dateFontSize}>{item.date}</Text>
                            </VStack>
                            <IconButton
                              className="icon-rotate"
                              icon={
                                <box-icon
                                  name="right-arrow-alt"
                                  size="sm"
                                  color={colors.purple}
                                ></box-icon>
                              }
                              transition="transform 0.3s ease-in-out"
                              position="absolute"
                              bottom="10px"
                              right="10px"
                              backgroundColor="transparent"
                              _hover={{
                                boxShadow: "lg",
                                transition: "all 0.3s ease-in-out",
                                "& .icon-rotate": {
                                  transform: "rotate(-45deg)",
                                  opacity: 1,  
                                  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", 
                                },
                                backgroundColor: colors.quinaryblack,
                              }}
                              _focus={{ boxShadow: "none" }}
                            />
                          </WrapItem>
                        </Wrap>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent
                      bgColor={colors.secondaryblack}
                      color="white"
                      borderRadius="md"
                      p={3}
                    >
                      <PopoverHeader className="h2">{item.role}</PopoverHeader>
                      <PopoverBody className="h3" color={colors.secondarywhite}>
                        {item.description}
                      </PopoverBody>
                    </PopoverContent>
                  </>
                );
              }}
            </Popover>
          </Center>
        ))}
      </Slider>
    </Box>
  );
};

const Experience = () => (
  <ChakraProvider>
    <VStack height="100%" spacing={4}>
      <Box width="100%" textAlign="left">
        <Text className="h1" fontSize="20px" color="white" p={4}>
          Employment Experience
        </Text>
      </Box>
      <VerticalCarousel items={employmentExperiences} />
    </VStack>
  </ChakraProvider>
);

export default Experience;
