import React, { useState } from 'react'
import { BiSolidReport } from 'react-icons/bi'
const Report = () => {

    const [name, setname] = useState("")
    const [city, setcity] = useState("")
    const [number, setnumber] = useState("")
    const [latitude, setlatitude] = useState("")
    const [longitude, setlongitude] = useState("")
    const [landmark, setlandmark] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setname(e.target.value)
        }
        else if (e.target.name == 'city') {
            setcity(e.target.value)
        }
        else if (e.target.name == 'number') {
            setnumber(e.target.value)
        }
        else if (e.target.name == 'latitude') {
            setlatitude(e.target.value)
        }
        else if (e.target.name == 'longitude') {
            setlongitude(e.target.value)
        }
        else if (e.target.name == 'landmark') {
            setlandmark(e.target.value)
        }
    }

    return (
        <div className='w-full flex flex-col items-center justify-center my-12'>

            <div className='flex flex-col items-center justify-center 2xl:h-[150px] h-[100px] 2xl:w-[550px] sm:w-[470px]'>

                {/* Heading */}

                <h1 className="2xl:text-7xl sm:text-4xl text-2xl text-[#007c7c] font-bold tracking-wide">Report For Help
                </h1>

                {/* Tagline */}

                <p className="2xl:text-2xl md:text-lg text-base text-[#8A8A8A] text-center m-auto">"Help those in need by reporting incidents on their behalf"</p>

            </div>


            <form onSubmit={handleSubmit} method='POST' className='2xl:w-[1000px] xl:w-[692px] lg:w-[662px]  w-full bg-white'>

                {/* Form Container */}

                <div className='flex flex-col w-full h-full justify-start sm:p-14 px-4 py-8 gap-y-12'>

                    {/* Input Fields */}

                    <div className='grid sm:grid-cols-2 gap-6 2xl:gap-12'>

                        {/* Name */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="text" name="name" id="name" value={name} onChange={handleChange} className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-[#007c7c] bg-transparent border-0 border-b-2 border-green-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

                            <label htmlFor="name" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-[#007c7c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFFFFF]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>

                        </div>

                        {/* City */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="text" name="city" id="city" value={city} onChange={handleChange} className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-[#007c7c] bg-transparent border-0 border-b-2 border-green-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

                            <label htmlFor="city" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-[#007c7c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFFFFF]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>

                        </div>

                        {/* Number */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="number" name="number" id="number" value={number} onChange={handleChange} className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-[#007c7c] bg-transparent border-0 border-b-2 border-green-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

                            <label htmlFor="number" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-[#007c7c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFFFFF]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Number</label>

                        </div>

                        {/* Latitude */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="text" name="latitude" id="latitude" value={latitude} onChange={handleChange} className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-[#007c7c] bg-transparent border-0 border-b-2 border-green-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

                            <label htmlFor="latitude" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-[#007c7c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFFFFF]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Latitude</label>

                        </div>

                        {/* Longitude */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="text" name="longitude" id="longitude" value={longitude} onChange={handleChange} className="block px-0 h-full w-full text-lg 2xl:text-[1.5rem] text-[#007c7c] bg-transparent border-0 border-b-2 border-green-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

                            <label htmlFor="cname" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-[#007c7c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFFFFF]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Longitude</label>

                        </div>

                        {/* landmark */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="text" name="landmark" id="landmark" value={landmark} onChange={handleChange} className="block px-0 h-full w-full text-lg 2xl:text-[1.5rem] text-[#007c7c] bg-transparent border-0 border-b-2 border-green-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#FFFFFF] peer" placeholder=" " required />

                            <label htmlFor="cname" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-[#007c7c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFFFFF]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landmark</label>

                        </div>

                    </div>

                    {/* Submit Button */}
                    <div
                        type='submit'
                        class="relative cursor-pointer inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium text-white bg-[#007c7c] transition duration-300 ease-out border-2 rounded-full shadow-md group"
                    >
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#007c7c] group-hover:translate-x-0 ease">
                            <BiSolidReport className="text-2xl" />
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-white font-medium text-xl transition-all duration-300 transform group-hover:translate-x-full ease">
                            Report Now
                        </span>
                        <span class="relative invisible">Report Now</span>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Report