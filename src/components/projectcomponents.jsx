import React from 'react';
import {
  ChakraProvider, Box, VStack, Text, IconButton, Center, HStack, Spacer, Button
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  PtDevice, PtLiveDashboard, Historical, HistoricalConfig, LiveConfig, LiveGPS, 
  Heatsinktemp, Heatsinkiso, Heatsinkdef, Heatsinkhouse, Heatsinkcpu,
  Electrogram, K64Fboard, Pacelogin, Pacemain, Pacesimu, Pacemode, Pacecomm,
  Pantrying, Pantrydetail, Pantryfull, Pantrylogin, Pantryopt,
  Skyjack, Skyjacktop,
  Lyriqtub1
} from '../assets';

const projectDataTelemetry = {
  name: "Race Car Telemetry Project",
  description: "This telemetry interface is designed to visually decode and interpret CANBUS messages and other vehicle telemetry in real-time, enabling remote monitoring and cloud storage for future analysis.",
  navigateTo: '/projecttelemetry',
  images: [
    { src: PtLiveDashboard, caption: "Live Dashboard, including live CANbus signals and GPS coordinates" },
    { src: Historical, caption: "Historical Dashboard, including lap count, GPS coordinates, CANbus signal, and time" },
    { src: HistoricalConfig, caption: "Historical Configuration, including Car_ID and timeline to load data from" },
    { src: LiveConfig, caption: "Live Configuration (Selecting CAR_ID), and GPS Start Line Database Input" },
    { src: LiveGPS, caption: "Loading and Deleting GPS Start Lines from Database" },
    { src: PtDevice, caption: "Physical Plug n' Play Device, including Raspberry Pi, CANHat, GPS Hat, Pi Casing" }
  ],
  tags: ["CanBUS", "Kafka", "Azure", "HTML", "CSS", "JavaScript"]
};

const projectDataRearTub = {
  name: "McMaster EcoCAR Rear Tub Project",
  description: "Redesign and manufacturing of the rear subframe and rear tub of the Cadillac Lyriq to mount the new EcoCAR EV Inverter and Connected Automated Vehicles (CAV) components.",
  navigateTo: '/projectreartub',
  images: [
    { src: Lyriqtub1, caption: "Cadillac Lyriq Rear with CAV Components in Trunk" }
  ],
  tags: ["Seimens NX", "Manufacturing", "Material Design"]
};

const projectDataPacemaker = {
  name: "Pacemaker Project",
  description: "Engineered a modern pacemaker, using code in Simulink with a user-friendly Python GUI, and communicating with an NXP FRDM K64F Board via serial communication",
  navigateTo: '/projectpacemaker',
  externalLink: 'https://github.com/brianmano/Pacemaker_Project', // External link (optional)
  images: [
    { src: K64Fboard, caption: "Pacemaker Device with NXP FRDM K64F Board" },
    { src: Pacelogin, caption: "Login Page" },
    { src: Pacemain, caption: "Pacing Mode, Settings, and Start/Stop" },
    { src: Electrogram, caption: "Pacemaker Electrogram" },
    { src: Pacesimu, caption: "Simulink Overlay Variables" },
    { src: Pacemode, caption: "Simulink Pacing Modes (In yellow box)" },
    { src: Pacecomm, caption: "Simulink Serial Communication" },
  ],
  tags: ["Seimens NX", "Manufacturing", "Material Design"]
};

const projectDataPantryPal = {
  name: "Pantry Pal Project",
  description: "Developed a user-friendly website designed to simplify pantry management by allowing clients to input details of their grocery purchases in a cloud storage for access anywhere",
  navigateTo: '/projectpantrypal', // Internal navigation
  externalLink: 'https://github.com/MenHackers/PantryPal', // External link (optional)
  images: [
    { src: Pantrylogin, caption: "Login Page" },
    { src: Pantryopt, caption: "Options Page" },
    { src: Pantrying, caption: "Adding ingredients and Quantity" },
    { src: Pantrydetail, caption: "Detailed grocery list, including quantity, user added, date, and delete" },
    { src: Pantryfull, caption: "General grocery list, including quantity, item and user added" }
  ],
  tags: ["JavaScript", "CSS", "HTML"]
};

const projectDataCPU = {
  name: "CPU Heatsink Design Project",
  description: "Engineered and designed a custom CPU Heatsink Design using natural convection to reduce maximum temperatures compared to a factory design, reducing temperatures from 198 C -> 132 C",
  navigateTo: '/projectcpu',
  images: [
    { src: Heatsinktemp, caption: "Thermal Analysis, including max temp" },
    { src: Heatsinkiso, caption: "Heatsink Isometric" },
    { src: Heatsinkdef, caption: "Heatsink Side View" },
    { src: Heatsinkhouse, caption: "CPU + Heatsink Housing" },
    { src: Heatsinkcpu, caption: "CPU Model" },
  ],
  tags: ["Fusion360", "Thermal Analysis", "Manufacturing", "Material Design"]
};

const projectDataSkyjack = {
  name: "SkyJack Paint NCR Shelf Project",
  description: "Engineered and designed a new shelving system, improving the organization of Paint NCRs, improving ergonomics, safety, and cost mitigation for NCR damaged parts.",
  navigateTo: '/projectskyjack',
  images: [
    { src: Skyjack, caption: "NCR Shelf Isometric" },
    { src: Skyjacktop, caption: "NCR Shelf, including sliding mechanism and outer slots for varying sized parts" },
  ],
  tags: ["SolidWorks", "Ergonomics", "Manufacturing", "Material Design"]
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    aria-label="Next"
    icon={<ArrowRightIcon boxSize={8} />}
    position="absolute"
    top="30%" // Center vertically
    right="10px"
    zIndex={1}
    onClick={onClick}
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'transparent' }}
    _active={{ backgroundColor: 'transparent' }}
  />
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    aria-label="Previous"
    icon={<ArrowLeftIcon boxSize={8} />}
    position="absolute"
    top="30%" // Center vertically
    left="10px"
    zIndex={1}
    onClick={onClick}
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'transparent' }}
    _active={{ backgroundColor: 'transparent' }}
  />
);



const Project = ({ projectData }) => {
  const navigate = useNavigate();

  const handleProjectNavigation = () => {
    if (projectData.externalLink) {
      window.open(projectData.externalLink, '_blank'); // Opens external link in new tab
    } else {
      navigate(projectData.navigateTo); // Internal navigation
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ChakraProvider>
      <VStack spacing={6} alignItems="flex-start">
        <HStack spacing={4} w="full" alignItems="center">
          <Text className="h1" fontSize="30px" color="white" textAlign="left">
            {projectData.name}
          </Text>
          <Spacer />
          <HStack spacing={2}>
            {projectData.tags.map((tag, index) => (
              <Box key={index} bg="teal.500" color="white" p={2} borderRadius="md" fontSize="sm">
                {tag}
              </Box>
            ))}
          </HStack>
        </HStack>

        <Center w="100%">
          <Box w="90vh"  h="45vh"  borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Slider {...settings}>
              {projectData.images.map((image, index) => (
                <VStack key={index}>
                  <Text
                    bg="rgba(0, 0, 0, 0.1)"
                    align = "center"
                    color="white"
                    pl={1}
                    className="h3"
                    fontSize="sm"
                  >
                    {image.caption}
                  </Text>
                  <img src={image.src} alt={`Slide ${index + 1}`} width="100%" />
                </VStack>
              ))}
            </Slider>
          </Box>
        </Center>

        <Text className="h3" fontSize="18px" color="white" textAlign="left">
          {projectData.description}
        </Text>

        <HStack w="full" justify="flex-end">
          <Button
            className="h1"
            onClick={handleProjectNavigation}
            color="white"
            variant="link"
            rightIcon={<ArrowRightIcon boxSize={3} />}
            fontSize="20px"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
            textDecoration="underline"
            mr={5}
          >
            View More
          </Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};


const Project_Telemetry = () => (
  <Project projectData={projectDataTelemetry} />
);

const Project_RearTub = () => (
  <Project projectData={projectDataRearTub} />
);

const Project_PantryPal = () => (
  <Project projectData={projectDataPantryPal} />
);

const Project_CPU = () => (
  <Project projectData={projectDataCPU} />
);

const Project_SkyJack = () => (
  <Project projectData={projectDataSkyjack} />
);

const Project_Pacemaker = () => (
  <Project projectData={projectDataPacemaker} />
);


export { Project_Telemetry, Project_RearTub, Project_PantryPal, Project_CPU, Project_SkyJack, Project_Pacemaker };
