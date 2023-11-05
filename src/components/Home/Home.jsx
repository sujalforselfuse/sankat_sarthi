import React, { useEffect, useState } from "react";
import WeatherData from "../WeatherData/WeatherData";
import QuickCall from "../QuickCall/QuickCall";
import NearbyServices from "../NearbyServices/NearbyServices";
import Report from "../Report/Report";
import Accordion from "../FAQ/Accordion";

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
