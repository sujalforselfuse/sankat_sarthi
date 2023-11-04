import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NearbyServices = () => {
  

  return (
    <>
      {/* Important Links - Desktop */}

      <div className="hidden lg:flex md:flex-row flex-col flex-wrap w-full justify-around">
        {/* Essential Supplies */}

        <div className="relative inline-block group">
          {/* Heading button */}

          <Link to='/food' class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-green-200 rounded hover:bg-white group cursor-pointer">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#007c7c] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Essential Supplies
            </span>
          </Link>

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

          <Link to='/hospital' class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-green-200 rounded hover:bg-white group cursor-pointer">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#007c7c] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Nearest Hospital
            </span>
          </Link>

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
    </>
  );
};

export default NearbyServices;
