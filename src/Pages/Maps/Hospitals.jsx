//shelter
import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./hospital.css";
import { AiOutlineSend } from "react-icons/ai";

const Hospitals_mark = () => {
  const [data, setData] = useState(null);
  const [distance, setDistance] = useState([]);
  const [dis, setDis] = useState([]);

  const calculateDistance = (lat2, lon2) => {
    let lat1, lon1;
    if ("geolocation" in navigator) {
      // Use the Geolocation API to get the user's coordinates
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        lat1 = latitude;
        lon1 = longitude;

        console.log(
          "latitutde1",
          lat1,
          "longitude1",
          lon1,
          "latitutde2",
          lat2,
          "longitude2",
          lon2
        );
        const R = 6371; // Earth's radius in kilometers

        const toRadians = (degrees) => {
          return degrees * (Math.PI / 180);
        };

        const phi1 = toRadians(lat1);
        const lambda1 = toRadians(lon1);
        const phi2 = toRadians(lon2);
        const lambda2 = toRadians(lat2);

        const dPhi = phi2 - phi1;
        const dLambda = lambda2 - lambda1;

        const a =
          Math.sin(dPhi / 2) ** 2 +
          Math.cos(phi1) * Math.cos(phi2) * Math.sin(dLambda / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const result = R * c;
        console.log("result", result);
        setDistance((prevDistance) => [...prevDistance, result]);
      });
    }
    return distance;
  };

  const fetch_shelter = async () => {
    try {
      if (!localStorage.getItem("token")) {
        return;
      }

      const response = await fetch(
        `https://sankat-backend.onrender.com/api/markers/get_hospital/${localStorage.getItem(
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
      console.log("json is ", json);

      if (json.success) {
        setData(json.shelters);
        let arr = [];
        for (let index = 0; index < json.shelters.markers.length; index++) {
          const element = json.shelters.markers[index];
          console.log("Elements ", element);
          let res = calculateDistance(
            element.coordinates[0],
            element.coordinates[1]
          );
          console.log(res);
          setDis(res);
        }

        console.log("distances", dis);
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
          markerElement.className = "marker2";

          // Attach click event to each marker
          markerElement.addEventListener("click", () => {
            navigator.geolocation.getCurrentPosition((position) => {
              const currentLocation = {
                coordinates: [
                  position.coords.longitude,
                  position.coords.latitude,
                ],
                type: "Point",
                properties: { name: "Current Location" },
              };

              const destination = {
                coordinates: marker.coordinates,
                type: "Feature",
                properties: { name: marker.title },
              };

              // Set the origin (current location) and destination for navigation
              directions.setOrigin(currentLocation);
              directions.setDestination(destination);
            });
          });

          new mapboxgl.Marker({ element: markerElement })
            .setLngLat(marker.coordinates)
            .addTo(map);
        });
        console.log(data);
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
        {data
          ? data.markers.map((item, index) => {
              return (
                <div
                  key={item.id}
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8"
                >
                  <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
                    <p className="font-semibold relative text-xl text-green-900">
                      Hospital {index}
                    </p>
                  </div>

                  <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
                    <p className="font-semibold relative text-xl text-green-900">
                      {distance[index]} km
                    </p>
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
              );
            })
          : ""}

        {/* Shelter */}

        {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
            <p className="font-semibold relative text-xl text-green-900">
              Shelter 1
            </p>
          </div>

          <div class="bg-green-100 p-4 rounded-md shadow flex items-center justify-center">
            <p className="font-semibold relative text-xl text-green-900">
              7 km
            </p>
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
        </div> */}
      </div>
    </>
  );
};

export default Hospitals_mark;
