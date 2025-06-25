// MainPageBrian.jsx
import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Center,
  Grid,
  GridItem
} from "@chakra-ui/react";
import "../App.css";
import Experience from "../components/experience";
import Projects from "../components/projects";
import ReachOut from "../components/reachout";
import TechnologyStack from "../components/technologystack";
import ContactMe from "../components/contactme";
import Metrics from "../components/metrics";
import colors from "../colors";
import { useNavigate } from "react-router-dom";

const MainPageBrian = () => {
  const navigate = useNavigate();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <ChakraProvider>
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={{ base: "auto", md: "100vh" }}
        height={{ base: "auto", md: "100vh" }}
        overflowY={{ base: "auto", md: "hidden" }}
      >
        <Center w="100%">
          <Grid
            h={{ base: "auto", md: "100vh" }}
            w="100%"
            templateRows={{ base: "repeat(32, auto)", md: "repeat(32, 1fr)", lg: "repeat(4, 1fr)" }}
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap="4"
            p="5"
            overflowY={{ base: "auto", md: "hidden" }}
            className={`page-wrapper ${hasLoaded ? "fade-in" : ""} staggered-fade-in`}
          >
            <GridItem rowSpan={{ base: 16, md: 16, lg: 2 }} colSpan={{ base: 1, md: 2, lg: 2 }}>
              <Box h="100%" overflowY="auto"><ReachOut /></Box>
            </GridItem>

            <GridItem rowSpan={{ base: 18, md: 12, lg: 4 }} colSpan={{ base: 1, md: 2, lg: 2 }} bg={colors.secondaryblack} borderRadius="15" borderWidth="1px" borderColor="#242424">
              <Center position="relative" h="100%">
                <Box position="absolute" top="0" left="0" w="100%" h="100%" borderRadius="15" pointerEvents="none" bg="linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, rgb(0, 0, 0) 110%)" zIndex={2} />
                <Box h="100%" overflowY="auto"><Projects /></Box>
              </Center>
            </GridItem>

            <GridItem rowSpan={{ base: 3, md: 15, lg: 3 }} colSpan={{ base: 1, md: 1, lg: 1 }} bg={colors.secondaryblack} borderRadius="15" borderWidth="1px" borderColor="#242424">
              <Center position="relative" h="100%" w="100%">
                <Box h="100%" overflowY="auto"><Experience /></Box>
                <Box position="absolute" top="0" left="0" w="100%" h="100%" borderRadius="15" pointerEvents="none" bg="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))" />
              </Center>
            </GridItem>

            <GridItem rowSpan={{ base: 2, md: 15, lg: 2 }} colSpan={{ base: 1, md: 1, lg: 1 }} bg={colors.secondaryblack} borderRadius="15" borderWidth="1px" borderColor="#242424">
              <Center position="relative" h="100%" w="100%">
                <Box h="100%" overflowY="auto"><TechnologyStack /></Box>
                <Box position="absolute" top="0" left="0" w="100%" h="100%" borderRadius="15" pointerEvents="none" bg="linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))" />
              </Center>
            </GridItem>

            <GridItem rowSpan={{ base: 3, md: 1, lg: 1 }} colSpan={{ base: 1, md: 1, lg: 2 }} bg={colors.secondaryblack} borderRadius="15" borderWidth="1px" borderColor="#242424">
              <Center position="relative" h="100%" w="100%">
                <Box h="100%" overflowY="auto"><Metrics /></Box>
                <Box position="absolute" top="0" left="0" w="100%" h="100%" borderRadius="15" pointerEvents="none" bg="linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))" />
              </Center>
            </GridItem>

            <GridItem rowSpan={{ base: 1, md: 1, lg: 1 }} colSpan={{ base: 1, md: 1, lg: 1 }} bg={colors.secondaryblack} borderRadius="15" borderWidth="1px" borderColor="#242424">
              <Center position="relative" h="100%" w="100%">
                <Box h="100%" overflowY="auto"><ContactMe /></Box>
                <Box position="absolute" top="0" left="0" w="100%" h="100%" borderRadius="15" pointerEvents="none" bg="linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))" />
              </Center>
            </GridItem>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default MainPageBrian;
