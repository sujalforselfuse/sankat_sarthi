import React, {useState} from 'react'
import ambulance from '../../Images/ambulance.png'
import ndrf from '../../Images/ndrf.png'
import fire from '../../Images/104-1049371_fire-truck-transparent-background__1___1___3_-removebg-preview.png'

const Home = () => {

  const [currentPH, setCurrentPH] = useState(null);

  const getPHColor = (pH) => {
    if (pH <= 3) return 'red-500';
    if (pH <= 5) return 'orange-500';
    if (pH <= 7) return 'yellow-500';
    if (pH <= 9) return 'green-500';
    return 'blue-500';
  };
  return (
    <div>

      {/* Weather Details Container */}

      <div href="#" className="block w-full p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <div className='flex md:flex-row flex-col gap-6 items-center'>

          {/* haeding */}

          <div className='flex flex-col justify-between md:items-start items-center'>

            {/* Heading */}

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <span className='capitalize text-orange-600'>Today's</span> Status</h5>

            {/* City */}

            <p className='font-normal text-xl text-gray-700 dark:text-gray-400'>Khargone</p>

          </div>

          {/* Indicator */}
          <div className="flex justify-between">
          {Array.from({ length: 10 }, (_, index) => {
          const pHValue = index + 1;
          const bgColorClass = `bg-${getPHColor(pHValue)}`;
          return (
            <div
              key={pHValue}
              className={`w-1/10 h-12 text-center ${bgColorClass} rounded-md relative`}
            >
              <span className="text-white font-bold">{pHValue}</span>
              {pHValue === currentPH && (
                <div className="h-2 bg-red-500 absolute bottom-0 w-full"></div>
              )}
            </div>
          );
        })}
          </div>

          {/* Percentage Disaster */}

          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Disaster Chances - <span className='text-orange-600'>10%</span></p>

        </div>

      </div>

      {/* Important Contact Numbers */}

      <div className='flex flex-wrap w-full justify-between my-12'>

        {/* Ambulance Number */}

        <a href="tel:102" className="cursor-pointer flex justify-around gap-x-2 max-w-sm p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <div>
            <img src={ambulance} alt="" className='h-24' />
          </div>

          <div>
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600 dark:text-white">Ambulance</h5>

            <a href='tel:102' className="font-normal text-2xl text-gray-400">102</a>
          </div>

        </a>

        {/* Fire Brigade Number */}

        <a href="tel:101" className="cursor-pointer flex justify-around gap-x-2 max-w-sm p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <div>
            <img src={fire} alt="" className='h-24' />
          </div>

          <div>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600 dark:text-white">Ambulance</h5>

            <a href='tel:101' className="font-normal text-2xl text-gray-400">101</a>

          </div>

        </a>


        {/* NDRF Number */}

        <a href="tel:011-23438136" className="cursor-pointer flex justify-around gap-x-2 w-full max-w-sm p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <div>
            <img src={ndrf} alt="" className='h-24' />
          </div>

          <div>

            <h5 className="mb-2 text-3xl font-bold tracking-tight text-orange-600 dark:text-white">NDRF</h5>

            <a href='tel:011-23438136' className="font-normal text-2xl text-gray-400">011-23438136</a>

          </div>

        </a>

      </div>

      {/* Important Links */}

      <div className='flex md:flex-row flex-col flex-wrap w-full justify-between'>

        <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-200 rounded hover:bg-white group">
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Nearest Shelter</span>
        </a>

        <a href="#_" class="relative bg-orange-200 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded hover:bg-white group">
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Nearest Hospital</span>
        </a>

        <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-200 rounded hover:bg-white group">
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Food Distribution</span>
        </a>
      </div>

    </div>
  )
}

export default Home