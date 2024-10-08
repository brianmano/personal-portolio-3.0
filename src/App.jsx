// @ts-nocheck
import React from 'react';
import MainPageConnor from './pages/mainpageconnor';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectPage from './components/projectpage';
import rehabilitationpdf from './pages/projectspages/RehabilitationProject.pdf';
import emgpdf from './pages/projectspages/Motorized EMG Controlled Driving Prosthesis.pdf';
import './App.css';

const App = () => {

  return (
    <ChakraProvider>
      <AnimatePresence mode='wait'>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HeroPage />} /> */}
          <Route key={Router.Route} path="/" element={<MainPageConnor />} />
          <Route path="/projectemg" element={
            <ProjectPage
            projectName="Motorized EMG Controlled Driving Prosthesis"
            projectDescription="Prototyped an EMG-controlled prosthesis capable of gripping and turning a steering wheel, leading the 3D-printed mechanical design while conducting FEA to ensure stress resilience, meeting peer-reviewed standards."
            projectTimeline="Jan 2023 - Apr 2023"
            pdfLink={emgpdf}
            />
          }
          />
          <Route path="/projectrehabilitation" element={<ProjectPage
            projectName="Finger Rehabilitation Device"
            projectDescription="Developed a motorized prototype to quantify recovery progress in stroke patients with hemiparesis, writing Arduino code for motor control and force measurement, and leading the 3D printing process to ensure precise part tolerances."
            projectTimeline="Jan 2024 - Apr 2024"
            pdfLink={rehabilitationpdf}
            />} />
        </Routes>
      </Router>
      </AnimatePresence>
     
    </ChakraProvider>
  );
};

export default App;