import React, { useEffect, useState } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import { BsFillCloudyFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import ambulance from "../../Images/ambulance.png";
import ndrf from "../../Images/ndrf.png";
import fire from "../../Images/104-1049371_fire-truck-transparent-background__1___1___3_-removebg-preview.png";
import report from "../../Images/report.png";
import { Link } from "react-router-dom";

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
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("Loading");
  const [chances, setChances] = useState("");
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [currentPH, setCurrentPH] = useState(1);

  const getPHColor = (pH) => {
    if (pH <= 2) return "#7cef85";
    if (pH <= 4) return "#7b8be9";
    if (pH <= 6) return "#eddd4a";
    if (pH <= 8) return "#f3ae40";
    return "#ef4444";
  };

  const fetch_chances = async () => {
    try {
      if (!localStorage.getItem("token")) {
        return;
      }

      const response = await fetch(
        `http://localhost:8000/api/chances//get_chances/${localStorage.getItem(
          "city"
        )}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        console.log("fetching", json);
        setChances(json.city);
        if(json.city.disaster_rate>90 && json.city.disaster_rate<=100){
          setCurrentPH(10);
        }
        else if(json.city.disaster_rate>80 && json.city.disaster_rate<=90){
          setCurrentPH(9);
        }
        else if(json.city.disaster_rate>70 && json.city.disaster_rate<=80){
          setCurrentPH(8);
        }
        else if(json.city.disaster_rate>60 && json.city.disaster_rate<=70){
          setCurrentPH(7);
        }
        else if(json.city.disaster_rate>50 && json.city.disaster_rate<=60){
          setCurrentPH(6);
        }
        else if(json.city.disaster_rate>40 && json.city.disaster_rate<=50){
          setCurrentPH(5);
        }
        else if(json.city.disaster_rate>30 && json.city.disaster_rate<=40){
          setCurrentPH(4);
        }
        else if(json.city.disaster_rate>20 && json.city.disaster_rate<=30){
          setCurrentPH(3);
        }
        else if(json.city.disaster_rate>10 && json.city.disaster_rate<=20){
          setCurrentPH(2);
        }
        else if(json.city.disaster_rate>0 && json.city.disaster_rate<=10){
          setCurrentPH(1);
        }
        console.log("chances", chances);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

 

  useEffect(() => {
    fetch_chances();
    setCity(localStorage.getItem("city"));
  }, []);

  return (
    <>
      {/* Weather Details Container */}

      <div
        className="block w-full p-2 sm:p-6 border-2 border-green-200 rounded-lg shadow hover:bg-gray-100"
        style={{ background: `${getPHColor(currentPH)}` }}
      >
        <div className="flex md:flex-row flex-col gap-6 items-center justify-between">
          {/* heading */}

          <div className="flex flex-col justify-between md:items-start items-center">
            {/* Heading */}

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-green-900">
              {" "}
              <span className="capitalize text-green-900">Today's</span> Status
            </h5>

            {/* City */}

            <p className="font-normal capitalize text-xl text-gray-700">
              {city}
            </p>
          </div>

          {/* Indicator */}
          <div className="bg-gray-100 p-2 md:p-4 w-full md:w-auto">
            <div className="flex justify-between">
              {Array.from({ length: 10 }, (_, index) => {
                const pHValue = index + 1;
                const bgColorClass = `${getPHColor(pHValue)}`;
                return (
                  <div
                    key={pHValue}
                    className={`h-12 w-full md:w-12 text-center rounded-md relative`}
                    style={{ backgroundColor: bgColorClass }}
                  >
                    <span className="text-black flex items-center justify-center h-full w-full font-bold">
                      {pHValue}
                    </span>

                    {pHValue === currentPH && (
                      <div className="relative bottom-0 w-full">
                        <BiSolidArrowToTop className="absolute text-[3rem] left-[-8px] md:left-0 top-[-8px]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Percentage Disaster */}
          <div className="flex flex-col justify-between items-center">
            <p className="font-normal text-xl text-gray-700">
              Disaster Chances -{" "}
              <span className="text-green-900">{chances.disaster_rate}</span>
            </p>

            <p className="font-normal text-xl text-gray-700">
              Disaster Type -{" "}
              <span className="text-green-900 capitalize">{chances.Alert_type}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Important Contact Numbers */}

      <div className="flex flex-wrap w-full justify-between gap-y-6">
        {/* Ambulance Number */}

        <a
          href="tel:102"
          className="cursor-pointer flex justify-around gap-x-2 max-w-sm p-6 bg-green-100 border-2 border-green-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div>
            <img src={ambulance} alt="" className="h-24" />
          </div>

          <div>
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#007c7c]">
              Ambulance
            </h5>

            <a
              href="tel:102"
              className="font-normal text-xl md:text-2xl text-gray-500"
            >
              102
            </a>
          </div>
        </a>

        {/* Control Room Number */}

        <a
          href="tel:101"
          className="cursor-pointer flex justify-around gap-x-2 max-w-sm p-6 bg-green-100 border-2 border-green-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div>
            <img src={fire} alt="" className="h-24" />
          </div>

          {/* Contact Number and Name */}

          <div>
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#007c7c]">
              Control Room
            </h5>

            <a
              href="tel:101"
              className="font-normal text-xl md:text-2xl text-gray-500"
            >
              101
            </a>
          </div>
        </a>

        {/* NDRF Number */}

        <a
          href="tel:011-23438136"
          className="cursor-pointer flex justify-around gap-x-2 w-full max-w-sm p-6 bg-green-100 border-2 border-green-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div>
            <img src={ndrf} alt="" className="h-24" />
          </div>

          <div>
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#007c7c]">
              NDRF
            </h5>

            <a
              href="tel:011-23438136"
              className="font-normal text-xl md:text-2xl text-gray-500"
            >
              011-23438136
            </a>
          </div>
        </a>
      </div>

      {/* Important Links - Desktop */}

      <div className="hidden lg:flex md:flex-row flex-col flex-wrap w-full justify-around">
        {/* Essential Supplies */}

        <div className="relative inline-block group">
          {/* Heading button */}

          <div class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-green-200 rounded hover:bg-white group cursor-pointer">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#007c7c] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Essential Supplies
            </span>
          </div>

          {/* Popup Content */}

          <div className="absolute z-10 hidden group-hover:flex flex-col -left-6 -bottom-36 gap-y-4 w-64 p-4 text-md text-gray-500 transition-opacity duration-300 bg-green-100 border border-green-200 rounded-lg shadow-sm opacity-100">
            {/* Popover content */}
            <p className="font-medium relative text-md text-gray-800 group-hover:text-black">
              "Need nourishment in a crisis? Use this to find local food
              distribution centers providing essential relief."
            </p>
          </div>
        </div>

        {/* Nearest Hospital */}

        <div className="relative inline-block group">
          {/* Heading button */}

          <div class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-green-200 rounded hover:bg-white group cursor-pointer">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#007c7c] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Nearest Hospital
            </span>
          </div>

          {/* Popup Content */}

          <div className="absolute z-10 hidden group-hover:flex flex-col -left-6 -bottom-36 gap-y-4 w-64 p-6 text-sm text-gray-500 transition-opacity duration-300 bg-green-100 border border-green-200 rounded-lg shadow-sm opacity-100">
            {/* Popover content */}
            <p className="font-medium relative text-md text-gray-800 group-hover:text-black">
              "Quickly access medical care: Click to find the closest hospital
              for immediate health services during emergencies."
            </p>
          </div>
        </div>

        {/* Nearest Shelter */}

        <div className="relative inline-block group">
          {/* Heading button */}

          <Link
            to="/shelter"
            class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-green-200 rounded hover:bg-white group cursor-pointer"
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#007c7c] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Nearest Shelter
            </span>
          </Link>

          {/* Popup Content */}

          <div className="absolute z-10 hidden group-hover:flex flex-col -left-6 -bottom-36 gap-y-4 w-64 p-6 text-sm text-gray-500 transition-opacity duration-300 bg-green-100 border border-gray-200 rounded-lg shadow-sm opacity-100">
            {/* Popover content */}
            <p className="font-medium relative text-md text-gray-800 group-hover:text-black">
              "Find safety instantly: Tap here to locate the nearest shelter in
              times of emergency and disaster."
            </p>
          </div>
        </div>
      </div>

      {/* Important Links - Mobile */}

      <div className="flex sm:flex-col flex-row flex-wrap lg:hidden gap-y-6 w-full">
        {/* Essential Supplies */}
        <a
          href="#_"
          class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-green-600 hover:to-green-600 ease bg-gradient-to-br from-green-300 to-green-500 md:w-auto w-full"
        >
          Essential Supplies
        </a>

        {/* Nearest Hospitals */}
        <a
          href="#_"
          class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-green-600 hover:to-green-600 ease bg-gradient-to-br from-green-300 to-green-500 md:w-auto w-full"
        >
          Nearest Hospitals
        </a>

        {/* Nearest Shelter */}
        <a
          href="#_"
          class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-green-600 hover:to-green-600 ease bg-gradient-to-br from-green-300 to-green-500 md:w-auto w-full"
        >
          Nearest Shelter
        </a>
      </div>

      {/* Report Container */}

      <div className="block w-full p-2 sm:p-6 border-2 bg-[#edffff] border-green-200 rounded-lg shadow hover:bg-gray-100">
        <div className="flex md:flex-row flex-col gap-6 items-center gap-x-16">
          {/* Image */}

          <div className="md:w-[60%] w-full">
            <img src={report} alt="" className="" />
          </div>

          {/* heading */}

          <div className="flex flex-col justify-between md:items-start items-center gap-y-3 md:gap-y-8">
            {/* Heading */}

            <h5 className="mb-2 text-4xl font-bold tracking-tight capitalize text-[#007c7c]">
              Report For Help
            </h5>

            <p className="font-medium relative text-md text-gray-800 group-hover:text-black">
              "Help those in need by reporting incidents on their behalf,
              ensuring timely aid reaches them through our network."
            </p>

            {/* Report Button */}
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium text-white bg-[#007c7c] transition duration-300 ease-out border-2 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#007c7c] group-hover:translate-x-0 ease">
                <BiSolidReport className="text-2xl" />
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white font-medium text-xl transition-all duration-300 transform group-hover:translate-x-full ease">
                Report Now
              </span>
              <span class="relative invisible">Report Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ's */}

      {/* Accordion box */}

      {AccordionData.map((data) => {
        return (
          <div id="accordion-open" data-accordion="open" key={data.id}>
            {/* Accordion heading */}

            <h2 id="accordion-open-heading-1">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 bg-green-100 border-green-200 rounded-t-xl`}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
              >
                <span className="flex items-center">
                  <svg
                    className={`w-5 h-5 mr-2 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {data.question}
                </span>
              </button>
            </h2>

            {/* Accordion Content */}

            <div
              className={`${
                isOpen ? "max-h-96 transition-max-h" : "max-h-0"
              } overflow-hidden p-5 border border-b-0 border-green-200 rounded-b-xl`}
              aria-labelledby="accordion-open-heading-1"
            >
              <p className="mb-2 text-gray-500">{data.answer}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
