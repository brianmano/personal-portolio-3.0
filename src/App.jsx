// @ts-nocheck
import React from 'react';
import MainPageBrian from './pages/mainpagebrian';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectPage from './components/projectpage';
import scalarpdf from './pages/projectspages/Portfolio-Report-Scalar.pdf';
import rearTubpdf from './pages/projectspages/Portfolio-Report-Ecocar.pdf';
import cpupdf from './pages/projectspages/Portfolio-Report-CPU.pdf';
import skyjackpdf from './pages/projectspages/Portfolio-Report-Skyjack.pdf';
import './App.css';



const App = () => {

  return (
    <ChakraProvider>
      <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HeroPage />} /> */}
          <Route key={Router.Route} path="/" element={<MainPageBrian />} />
          <Route path="/projectreartub" element={
            <ProjectPage
            projectName="McMaster EcoCAR Rear Tub and Cooling System Project"
            projectDescription="Redesigned and manufactured a new rear subframe and rear tub of the Cadillac Lyriq to mount the new EV Inverter and Connected Automated Vehicles components. A cooling system was engineered to reroute airflow to keep parts at ambient temperature."
            projectTimeline="Jan 2023 - May 2023"
            pdfLink={rearTubpdf}
            />
          }
          />
          <Route path="/projecttelemetry" element={<ProjectPage
            projectName="Scalar Performance Race Telemetry Project"
            projectDescription="Engineered and developed the software and hardware for a scalable real-time race telemetry system, including a high performing data pipeline (<50ms), cloud storage, custom wiring harness (CANBus), and customizable dashboard."
            projectTimeline="May 2024 - Present"
            pdfLink={scalarpdf}
            />} />
          <Route path="/projectcpu" element={<ProjectPage
            projectName="CPU Heatsink Design Project"
            projectDescription="Designed a custom CPU Heatsink using natural convection to reduce maximum temperatures compared to a factory design from 198 C -> 132 C."
            projectTimeline="September 2023"
            pdfLink={cpupdf}
            />} />
          <Route path="/projectskyjack" element={<ProjectPage
            projectName="SkyJack Paint NCR Shelf Project"
            projectDescription="Designed and engineered a new part shelf for the storage of Paint NCRs, significantly improving ergonomics, safety, and cost migigation of damaged parts."
            projectTimeline="May 2023 - August 2023"
            pdfLink={skyjackpdf}
            />} />
        </Routes>
      </Router>
      </AnimatePresence>
     
    </ChakraProvider>
  );
};

export default App;