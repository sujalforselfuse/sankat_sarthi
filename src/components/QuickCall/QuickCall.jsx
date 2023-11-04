import React from 'react'
import ambulance from "../../Images/ambulance.png";
import ndrf from "../../Images/ndrf.png";
import fire from "../../Images/fire.png";
const QuickCall = () => {
    return (
        <>
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
        </>
    )
}

export default QuickCall