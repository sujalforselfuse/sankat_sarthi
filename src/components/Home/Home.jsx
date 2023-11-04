import React, { useEffect, useState } from "react";
import WeatherData from "../WeatherData/WeatherData";
import QuickCall from "../QuickCall/QuickCall";
import NearbyServices from "../NearbyServices/NearbyServices";
import Report from "../Report/Report";
import Accordion from "../FAQ/Accordion";

const AccordionData = [
  {
    id: 1,
    question: "What is Sankat Sarthi?",
    answer:
      "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
  },

  {
    id: 2,
    question: "How can 'Sankat Sarthi' help me during a disaster?",
    answer:
      "The app provides immediate access to emergency alerts, safety tips, and instructions for evacuation. It can guide you to the nearest shelter, help in signaling for rescue, and connect you with relief services.",
  },

  {
    id: 3,
    question: "How does 'Sankat Sarthi' ensure the accuracy of its alerts?",
    answer:
      " We source our information from reliable and official channels, including meteorological data, government advisories, and verified on-ground reports. Our team constantly monitors and updates the information to maintain accuracy.",
  },

  {
    id: 4,
    question: "What is Sankat Sarthi?",
    answer:
      "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
  },

  {
    id: 5,
    question: "What is Sankat Sarthi?",
    answer:
      "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
  },

  {
    id: 6,
    question: "What is Sankat Sarthi?",
    answer:
      "Sankat Sarthi is a disaster management app designed to provide real-time alerts, guidance, and assistance during various emergencies. It aims to enhance community resilience by offering tools for risk assessment, emergency planning, and volunteer coordination.",
  },
];

const Home = () => {
  

  return (
    <>
  
      <WeatherData />

      <QuickCall />

      <NearbyServices />

      <Report />

      <Accordion />
    </>
  );
};

export default Home;
