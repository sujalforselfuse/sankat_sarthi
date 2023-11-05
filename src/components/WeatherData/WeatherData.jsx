import React, { useState, useEffect } from 'react'
import {BiSolidArrowToTop} from 'react-icons/bi'

const WeatherData = () => {

    const [chances, setChances] = useState("")
    const [currentPH, setCurrentPH] = useState('1')
    const [city, setCity] = useState("")

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
                `http://localhost:8000/api/chances/get_chances/${localStorage.getItem(
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
                if (json.city.disaster_rate > 90 && json.city.disaster_rate <= 100) {
                    setCurrentPH(10);
                }
                else if (json.city.disaster_rate > 80 && json.city.disaster_rate <= 90) {
                    setCurrentPH(9);
                }
                else if (json.city.disaster_rate > 70 && json.city.disaster_rate <= 80) {
                    setCurrentPH(8);
                }
                else if (json.city.disaster_rate > 60 && json.city.disaster_rate <= 70) {
                    setCurrentPH(7);
                }
                else if (json.city.disaster_rate > 50 && json.city.disaster_rate <= 60) {
                    setCurrentPH(6);
                }
                else if (json.city.disaster_rate > 40 && json.city.disaster_rate <= 50) {
                    setCurrentPH(5);
                }
                else if (json.city.disaster_rate > 30 && json.city.disaster_rate <= 40) {
                    setCurrentPH(4);
                }
                else if (json.city.disaster_rate > 20 && json.city.disaster_rate <= 30) {
                    setCurrentPH(3);
                }
                else if (json.city.disaster_rate > 10 && json.city.disaster_rate <= 20) {
                    setCurrentPH(2);
                }
                else if (json.city.disaster_rate > 0 && json.city.disaster_rate <= 10) {
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
                           Current Location - {city}
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

        </>
    )
}

export default WeatherData