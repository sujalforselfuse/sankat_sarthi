//shelter
import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import './marker.css';
import { AiOutlineSend } from 'react-icons/ai'
const MultipleMarkersMap = () => {
  const fetch_shelter = async () => {
    try {
      if (!localStorage.getItem("token")) {
        return;
      }

      const response = await fetch(
        `http://localhost:8000/api/markers/get_shelter/indore`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        mapboxgl.accessToken =
          "pk.eyJ1Ijoic3VqYWxmb3JzZWxmdXNlIiwiYSI6ImNsb2pvZnhycTE2eWIybG52cHN4ZnM2dTcifQ.tWBOD0cMfpd8nhcdavfT4Q";

        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: json.shelters.center, // Set the center
          zoom: 12, // Set the zoom level
        });

        // Initialize MapboxDirections and set the map
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: "metric", // You can adjust units as needed
        });
        map.addControl(directions, "top-left");

        const markerCoordinates = json.shelters.markers;

        markerCoordinates.forEach((marker, index) => {
          const markerElement = document.createElement("div");
          markerElement.className = "marker";

          // Attach click event to each marker
          markerElement.addEventListener("click", () => {
            const destination = {
              coordinates: marker.coordinates,
              type: "Feature",
              properties: { name: marker.title },
            };

            // Trigger directions to the clicked marker
            directions.setDestination(destination);
          });

          new mapboxgl.Marker({ element: markerElement })
            .setLngLat(marker.coordinates)
            .addTo(map);
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetch_shelter();
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "400px" }} />

      <div class="container mx-auto py-4 px-4 md:px-28 xl:px-40 flex flex-col gap-y-6">

        {/* Shelter */}

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">

          <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
            <p className="font-semibold relative text-xl text-green-900">Shelter 1</p>
          </div>

          <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
            <p className="font-semibold relative text-xl text-green-900">7 km</p>
          </div>

          <div class="rounded-full flex items-center justify-center">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium text-white bg-[#007c7c] transition duration-300 ease-out border-2 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#007c7c] group-hover:translate-x-0 ease">
                <AiOutlineSend className="text-2xl" />
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white font-medium text-xl transition-all duration-300 transform group-hover:translate-x-full ease">
                Navigate
              </span>
              <span class="relative invisible">Navigate</span>
            </a>
          </div>

        </div>

        {/* Shelter */}

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">

          <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
            <p className="font-semibold relative text-xl text-green-900">Shelter 1</p>
          </div>

          <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
            <p className="font-semibold relative text-xl text-green-900">7 km</p>
          </div>

          <div class="rounded-full flex items-center justify-center">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium text-white bg-[#007c7c] transition duration-300 ease-out border-2 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#007c7c] group-hover:translate-x-0 ease">
                <AiOutlineSend className="text-2xl" />
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white font-medium text-xl transition-all duration-300 transform group-hover:translate-x-full ease">
                Navigate
              </span>
              <span class="relative invisible">Navigate</span>
            </a>
          </div>

        </div>

      </div>

    </>
  );
};

export default MultipleMarkersMap;
