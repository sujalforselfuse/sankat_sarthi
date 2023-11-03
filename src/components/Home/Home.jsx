import React from 'react'

const Home = () => {
  return (
    <div>

      {/* Weather Details Container */}

      <div href="#" class="block w-full p-6 bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <div className='flex gap-x-6 items-center'>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <span className='capitalize text-orange-600'>Today's</span> Weather</h5>
        <p class="font-normal text-xl text-gray-700 dark:text-gray-400">Disaster Chances - <span className='text-orange-600'>10%</span></p>
      </div>
      </div>

    </div>
  )
}

export default Home