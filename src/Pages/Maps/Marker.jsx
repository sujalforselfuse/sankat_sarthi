//shelter
import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import './marker.css';
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
  return <div id="map" style={{ width: "100vw", height: "400px" }} />;
};

export default MultipleMarkersMap;
