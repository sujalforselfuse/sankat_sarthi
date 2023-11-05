import React from 'react'
import {BiSolidReport} from 'react-icons/bi'
import report from "../../Images/report.png";

const Report = () => {
  return (
    <>
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
              href="/report"
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
    </>
  )
}

export default Report