import React, { useState } from 'react'
import { BiSolidArrowToTop } from 'react-icons/bi'
import { BsFillCloudyFill } from 'react-icons/bs'
import ambulance from '../../Images/ambulance.png'
import ndrf from '../../Images/ndrf.png'
import fire from '../../Images/104-1049371_fire-truck-transparent-background__1___1___3_-removebg-preview.png'

const Home = () => {

  const [currentPH, setCurrentPH] = useState(1);

  const getPHColor = (pH) => {
    if (pH <= 2) return '#4de559';
    if (pH <= 4) return '#7b8be9';
    if (pH <= 6) return '#eddd4a';
    if (pH <= 8) return '#f3ae40';
    return '#ef4444';
  };

  const [isPopoverVisible, setPopoverVisible] = useState(true);

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };
  return (
    <div>

      {/* Weather Details Container */}

      <div className="block w-full p-2 sm:p-6 border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100" style={{ background: `${getPHColor(currentPH)}` }}>

        <div className='flex md:flex-row flex-col gap-6 items-center justify-between'>

          {/* heading */}

          <div className='flex flex-col justify-between md:items-start items-center'>

            {/* Heading */}

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"> <span className='capitalize text-orange-600'>Today's</span> Status</h5>

            {/* City */}

            <p className='font-normal text-xl text-gray-700'>Khargone</p>

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
                    <span className="text-black flex items-center justify-center h-full w-full font-bold">{pHValue}</span>

                    {pHValue === currentPH && (
                      <div className="relative bottom-0 w-full">
                        <BiSolidArrowToTop className='absolute text-[3rem] left-[-8px] md:left-0 top-[-8px]' />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Percentage Disaster */}

          <p className="font-normal text-xl text-gray-700">Disaster Chances - <span className='text-orange-600'>10%</span></p>

        </div>

      </div>

      {/* Important Contact Numbers */}

      <div className='flex flex-wrap w-full justify-between my-12 gap-y-6'>

        {/* Ambulance Number */}

        <a href="tel:102" className="cursor-pointer flex justify-around gap-x-2 max-w-sm p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100">

          <div>
            <img src={ambulance} alt="" className='h-24' />
          </div>

          <div>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600">Ambulance</h5>

            <a href='tel:102' className="font-normal text-xl md:text-2xl text-gray-400">102</a>

          </div>

        </a>

        {/* Control Room Number */}

        <a href="tel:101" className="cursor-pointer flex justify-around gap-x-2 max-w-sm p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100">

          <div>
            <img src={fire} alt="" className='h-24' />
          </div>

          {/* Contact Number and Name */}

          <div>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600">Control Room</h5>

            <a href='tel:101' className="font-normal text-xl md:text-2xl text-gray-400">101</a>

          </div>

        </a>


        {/* NDRF Number */}

        <a href="tel:011-23438136" className="cursor-pointer flex justify-around gap-x-2 w-full max-w-sm p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100">

          <div>
            <img src={ndrf} alt="" className='h-24' />
          </div>

          <div>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600">NDRF</h5>

            <a href='tel:011-23438136' className="font-normal text-xl md:text-2xl text-gray-400">011-23438136</a>

          </div>

        </a>

      </div>

      {/* Important Links - Desktop */}

      <div className='hidden lg:flex md:flex-row flex-col flex-wrap w-full justify-around'>

        {/* Essential Supplies */}

        <div className="relative inline-block group">

          {/* Heading button */}

          <div class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-orange-200 rounded hover:bg-white group cursor-pointer">

            <span class="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">Essential Supplies</span>

          </div>

          {/* Popup Content */}

          <div className="absolute z-10 hidden group-hover:flex flex-col -left-8 -bottom-20 gap-y-4 w-64 p-6 text-sm text-gray-500 transition-opacity duration-300 bg-orange-100 border border-gray-200 rounded-lg shadow-sm opacity-100">
            {/* Popover content */}
            <p className='font-medium relative text-md text-gray-800 group-hover:text-black'>"Need nourishment in a crisis? Use this to find local food distribution centers providing essential relief."</p>

            <a href="#_" class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white text-xl rounded-md shadow-2xl group">
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span class="relative">Search for help</span>
            </a>

          </div>

        </div>

        {/* Nearest Hospital */}

        <div className="relative inline-block group">

          {/* Heading button */}

          <div class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-orange-200 rounded hover:bg-white group cursor-pointer">

            <span class="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">Nearest Hospital</span>

          </div>

          {/* Popup Content */}

          <div className="absolute z-10 hidden group-hover:flex flex-col -left-10 -bottom-20 gap-y-4 w-64 p-6 text-sm text-gray-500 transition-opacity duration-300 bg-orange-100 border border-gray-200 rounded-lg shadow-sm opacity-100">
            {/* Popover content */}
            <p className='font-medium relative text-md text-gray-800 group-hover:text-black'>"Quickly access medical care: Click to find the closest hospital for immediate health services during emergencies."</p>

            <a href="#_" class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white text-xl rounded-md shadow-2xl group">
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span class="relative">Search for help</span>
            </a>

          </div>

        </div>

        {/* Nearest Shelter */}

        <div className="relative inline-block group">

          {/* Heading button */}

          <div class="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-orange-200 rounded hover:bg-white group cursor-pointer">

            <span class="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

            <span class="relative w-full text-xl text-black transition-colors duration-300 ease-in-out group-hover:text-white">Nearest Shelter</span>

          </div>

          {/* Popup Content */}

          <div className="absolute z-10 hidden group-hover:flex flex-col -left-10 -bottom-20 gap-y-4 w-64 p-6 text-sm text-gray-500 transition-opacity duration-300 bg-orange-100 border border-gray-200 rounded-lg shadow-sm opacity-100">
            {/* Popover content */}
            <p className='font-medium relative text-md text-gray-800 group-hover:text-black'>"Find safety instantly: Tap here to locate the nearest shelter in times of emergency and disaster."</p>

            <a href="#_" class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white text-xl rounded-md shadow-2xl group">
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span class="relative">Search for help</span>
            </a>

          </div>

        </div>

      </div>

      {/* Important Links - Mobile */}

      <div className='flex sm:flex-col flex-row flex-wrap lg:hidden gap-y-6 w-full'>

        {/* Essential Supplies */}
        <a href="#_" class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-orange-300 to-orange-500 md:w-auto">
          Essential Supplies
        </a>

        {/* Nearest Hospitals */}
        <a href="#_" class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-orange-300 to-orange-500 md:w-auto">
          Nearest Hospitals
        </a>

        {/* Nearest Shelter */}
        <a href="#_" class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-orange-300 to-orange-500 md:w-auto">
          Nearest Shelter
        </a>

      </div>

    </div>
  )
}

export default Home