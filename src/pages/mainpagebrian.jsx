import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Button,
  Grid,
  GridItem,
  Text,
  Center,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import "../App.css";
import Experience from "../components/experience";
import Projects from "../components/projects";
import ReachOut from "../components/reachout";
import TechnologyStack from "../components/technologystack";
import ContactMe from "../components/contactme";
import Metrics from "../components/metrics";
import colors from "../colors";
import useMediaQuery from "react-responsive";
import { useNavigate } from "react-router-dom";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Adjust the delay between each child
    },
  },
};

const MainPageBrian = () => {
  const navigate = useNavigate();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const handleheropage = () => {
    setHasLoaded(false);
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <ChakraProvider>
      <Box width="100%" display="flex" justifyContent="center" alignItems="center">
        <Center width="100%">
          <Grid
            h="100vh"
            w="100%"
            templateRows={{ base: "repeat(32, 50px)", md: "repeat(32, 1fr)", lg: "repeat(4, 1fr)" }}
            templateColumns={{
              base: "350px",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="4"
            p="5"
            overflowY={{ base: "scroll", md: "hidden" }}
            className={`page-wrapper ${hasLoaded ? "fade-in" : ""} staggered-fade-in`}
          >
            <GridItem
              rowSpan={{ base: 16, md: 16, lg: 2 }}
              colSpan={{ base: 1, md: 2, lg: 2}}
              borderWidth="1px"
              borderRadius="15"
              borderColor="#121F45"
            >
              <ReachOut />
            </GridItem>

            <GridItem
              rowSpan={{ base: 18, md: 12, lg: 4  }}
              colSpan={{ base: 1, md: 2, lg: 2  }}
              backgroundColor={colors.secondaryblack}
              borderRadius="15"
              borderWidth="1px"
              borderColor="#121F45"
            >
              <Center position="relative" h="100%">
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="15"
                  pointerEvents="none" // Ensure overlay doesn't block interaction
                  bgColor={colors.secondaryblack}
                  zIndex={2}
                  bg="linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, rgb(0, 0, 0) 110%);"
                />
                <Projects />
              </Center>
            </GridItem>

            <GridItem
              rowSpan={{ base: 3, md: 15, lg: 3  }}
              colSpan={{ base: 1, md: 1, lg: 1  }}
              backgroundColor={colors.secondaryblack}
              borderRadius="15"
              borderWidth="1px"
              borderColor="#121F45"
            >
              <Center position="relative" h="100%" w="100%" overflow="hidden">
                {" "}
                {/* Make Center relative for overlay */}
                <Experience />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="15"
                  pointerEvents="none" // Ensure overlay doesn't block interaction
                  bgColor={colors.secondaryblack}
                  bg="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))"
                />
              </Center>
            </GridItem>

            <GridItem
              rowSpan={{ base: 2, md: 15, lg: 2  }}
              colSpan={{ base: 1, md: 1, lg: 1  }}
              backgroundColor={colors.secondaryblack}
              borderRadius="15"
              borderWidth="1px"
              borderColor="#121F45"
            >
              <Center position="relative" h="100%" w="100%">
                <TechnologyStack />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="15"
                  pointerEvents="none" // Ensure overlay doesn't block interaction
                  bg="linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))"
                />
              </Center>
            </GridItem>

            <GridItem
              rowSpan={{ base: 3, md: 1, lg: 1  }}
              colSpan={{ base: 1, md: 1, lg: 2  }}
              backgroundColor={colors.secondaryblack}
              borderRadius="15"
              borderWidth="1px"
              borderColor="#121F45"
            >
              <Center position="relative" h="100%" w="100%">
                {" "}
                {/* Make Center relative for overlay */}
                <Metrics />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="15"
                  pointerEvents="none" // Ensure overlay doesn't block interaction
                  bg="linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))"
                />
              </Center>
            </GridItem>

            <GridItem
              rowSpan={{ base: 1, md: 1, lg: 1  }}
              colSpan={{ base: 1, md: 1, lg: 1  }}
              backgroundColor={colors.secondaryblack}
              borderRadius="15"
              borderWidth="1px"
              borderColor="#121F45"
            >
              <Center position="relative" h="100%" w="100%">
                {" "}
                {/* Make Center relative for overlay */}
                <ContactMe />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  borderRadius="15"
                  pointerEvents="none" // Ensure overlay doesn't block interaction
                  bg="linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))"
                />
              </Center>
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default MainPageBrian;
