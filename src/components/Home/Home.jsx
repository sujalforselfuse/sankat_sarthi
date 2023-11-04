import React, { useState } from 'react'
import { BiSolidArrowToTop } from 'react-icons/bi'
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
  return (
    <div>

      {/* Weather Details Container */}

      <div className="block w-full p-2 sm:p-6 border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ background: `${getPHColor(currentPH)}` }}>

        <div className='flex md:flex-row flex-col gap-6 items-center justify-between'>

          {/* heading */}

          <div className='flex flex-col justify-between md:items-start items-center'>

            {/* Heading */}

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <span className='capitalize text-orange-600'>Today's</span> Status</h5>

            {/* City */}

            <p className='font-normal text-xl text-gray-700 dark:text-gray-400'>Khargone</p>

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

          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Disaster Chances - <span className='text-orange-600'>10%</span></p>

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

        {/* Fire Brigade Number */}

        <a href="tel:101" className="cursor-pointer flex justify-around gap-x-2 max-w-sm p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <div>
            <img src={fire} alt="" className='h-24' />
          </div>

          <div>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600 dark:text-white">Ambulance</h5>

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

      {/* Important Links */}

      <div className='flex md:flex-row flex-col flex-wrap w-full justify-between my-40'>

        <div class="relative inline-flex items-center md:items-start justify-start gap-y-2 max-w-[22rem] flex-col px-6 py-3 overflow-hidden font-medium transition-all bg-orange-200 hover:bg-white rounded group h-fit">

          <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

          <span class="relative w-full text-left text-black text-2xl transition-colors duration-300 ease-in-out group-hover:text-white">Nearest Shelter</span>

          <div className='hidden group-hover:block'>

            <p className='font-normal text-md md:text-lg text-gray-800 group-hover:text-black'>"Find safety instantly: Tap here to locate the nearest shelter in times of emergency and disaster."</p>

            <a href="#_" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span class="relative">Search</span>
            </a>

          </div>

        </div>

        {/* <div class="relative bg-orange-200 inline-flex gap-y-2 items-center md:items-start justify-between max-w-[22rem] flex-col px-6 py-3 overflow-hidden font-medium transition-all rounded group">

          <span class="relative w-full text-left text-2xl text-black transition-colors duration-300 ease-in-out">Nearest Hospital</span>

          <p className='relative font-normal text-md md:text-lg text-gray-800 group-hover:text-black'>Quickly access medical care: Click to find the closest hospital for immediate health services during emergencies.</p>

          <a href="#_" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span class="relative">Search</span>
          </a>

        </div>

        <div class="relative inline-flex flex-col gap-y-2 max-w-[22rem] items-center md:items-start justify-between px-6 py-3 overflow-hidden font-medium transition-all bg-orange-200 rounded group">

          <span class="relative w-full text-left text-2xl text-black transition-colors duration-300 ease-in-out">Essential Supplies</span>

          <p className='font-normal relative text-md md:text-lg text-gray-800 group-hover:text-black'>"Need nourishment in a crisis? Use this to find local food distribution centers providing essential relief."</p>

          <a href="#_" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span class="relative">Search</span>
          </a>

        </div> */}
      </div>

    </div>
  )
}

export default Home