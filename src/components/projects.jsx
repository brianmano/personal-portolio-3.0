import React, { useState } from "react";
import Slider from "react-slick";
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Grid,
  GridItem,
  Center,
  Spacer,
  IconButton,
  Tag,
  TagLabel,
  useBreakpointValue
} from "@chakra-ui/react";
import "../app.css";
import {
  Project_Telemetry,
  Project_RearTub,
  Project_CPU,
  Project_PantryPal,
  Project_SkyJack,
  Project_Pacemaker,
} from "./projectcomponents.jsx";
import SCR1 from "../assets/projectgrid/sc_stance.jpg";
import Lyriq from "../assets/projectgrid/lyriq.jpg";
import PantryPal from "../assets/projectgrid/pantrypal.jpg";
import Skyjack from "../assets/projectgrid/skyjack.jpg";
import Pacemaker from "../assets/projectgrid/K64F-Board.jpg";
import Heatsink from "../assets/projectgrid/heatsink.png";
import "boxicons";
import colors from "../colors.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// Updated projectData with images
const projectData = [
  {
    id: 1,
    name: "Scalar Performance Race Telemetry Project",
    description:
      "Engineered and developed the software and hardware for a scalable real-time race telemetry system, including a high performing data pipeline (<50ms), cloud storage, custom wiring harness (CANBus), and customizable dashboard.",
    component: <Project_Telemetry />,
    image: SCR1,
    tags: ["Apache Kafka", "CANBus", "Azure (SQL Database)", "InfluxDB", "Python", "JavaScript", "HTML", "CSS", "Raspberry Pi"],
    route: "/projecttelemetry",
    margin: "0px",
  },
  {
    id: 2,
    name: "McMaster EcoCAR Rear Tub and Cooling System Project",
    description:
      "Redesigned and manufactured a new rear subframe and rear tub of the Cadillac Lyriq to mount the new EV Inverter and Connected Automated Vehicles components. A cooling system was engineered to reroute airflow to keep parts at ambient temperature.",
    component: <Project_RearTub />,
    image: Lyriq,
    tags: ["Seimens NX", "Manufacturing", "Material Design"],
    route: "/projectreartub",
    margin: "-20px",
  },
  {
    id: 3,
    name: "CPU Heatsink Design Project",
    component: <Project_CPU />,
    description:
      "Designed a custom CPU Heatsink using natural convection to reduce maximum temperatures compared to a factory design from 198 C -> 132 C.",
    image: Heatsink,
    tags: ["Fusion360", "Thermal Analysis", "Manufacturing", "Material Design"],
    route: "/projectcpu",
    margin: "-20px",
  },
  {
    id: 4,
    name: "PantryPal Project",
    component: <Project_PantryPal />,
    description:
      "Developed a user-friendly website designed to simplify pantry management by allowing clients to input their details of their grocery purchases in cloud storage for access anywhere.",
    image: PantryPal,
    tags: ["JavaScript", "CSS", "HTML"],
    route: "/projectpantrypal",
    margin: "-20px",
  },
  {
    id: 5,
    name: "SkyJack Paint NCR Shelf Project",
    component: <Project_SkyJack />,
    description:
      "Designed and engineered a new part shelf for the storage of Paint NCRs, significantly improving ergonomics, safety, and cost migigation of damaged parts.",
    image: Skyjack,
    tags: ["SolidWorks", "Ergonomics", "Manufacturing", "Material Design"],
    route: "/projectskyjack",
    margin: "-20px",
  },
  {
    id: 6,
    name: "Pacemaker Project",
    component: <Project_Pacemaker />,
    description:
      "Engineered a modern pacemaker, using Simulink code logic with a user-friendly GUI, and using an NXP FRDM K64F for serial communication.",
    image: Pacemaker,
    tags: ["Python", "Simulink", "Serial Communication"],
    route: "/projectpacemaker",
    margin: "-20px",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    navigate(project.route);
  };

  const titleFontSize = useBreakpointValue({ base: '16px', md: '16px', lg: '20px' });
  const descriptionFontSize = useBreakpointValue({ base: '12px', md: '10px', lg: '12px' });
  const tagFontSize = useBreakpointValue({ base: '8px', md: '8px', lg: '10px' });
  const spacing = useBreakpointValue({ base: 2, md: 2, lg: 4 });
  

  return (
    <ChakraProvider>
      <Grid
        h="100%"
        w="100%"
        templateRows={{ base: "1fr", md: "repeat(6, 100%)", lg: "repeat(6, 30%)" }}
        templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }}
        gap={spacing}
        p={spacing}
        overflowY="scroll"
        borderRadius={15}
        transition="all 0.3s ease"
        className="custom-scrollbar"
        MaskedElement="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)"
      >
        {projectData.map((project) => (
          <GridItem
            key={project.id}
            position="relative"
            className="griditem"
            borderRadius={15}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => handleProjectSelect(project)}
            overflow="hidden"
            backgroundColor={colors.tertiaryblack}
            p="3"
            boxShadow="md"
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
          >
            <HStack h="100%" w="100%" gap="3">
              <Image
                src={project.image}
                alt={project.name}
                width="50%"
                height="100%"
                objectFit="cover"
                borderRadius={12}
                minW="50%"
              />
              <VStack align="start">
                <Text className="h1" fontSize={titleFontSize} color="white">
                  {project.name}
                </Text>
                <Text className="h3" fontSize={descriptionFontSize} color="white">
                  {project.description}
                </Text>
                <HStack spacing={1} className="tag-container">
                  {project.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      textColor={colors.secondaryblack}
                      backgroundColor={colors.purple}
                      fontSize={tagFontSize}
                      className="tag-item"
                    >
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            </HStack>

            <IconButton
              position="absolute"
              top={1}
              right={1}
              transition= "all 0.3s ease-in-out"
              opacity={0}
              variant="link"
              aria-label="Send email"
              icon={
                <box-icon
                  name="right-arrow-alt"
                  size="md"
                  color={colors.purple}
                ></box-icon>
              }
              className="icon-rotate"
            />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export default Projects;
