import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const MultipleMarkersMap = () => {
  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoic3VqYWxmb3JzZWxmdXNlIiwiYSI6ImNsb2pvZnhycTE2eWIybG52cHN4ZnM2dTcifQ.tWBOD0cMfpd8nhcdavfT4Q";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [
        75.86504050405028,
        22.718919865368477
      ], // Set the center
      zoom: 12, // Set the zoom level
    });

    // Define an array of marker coordinates
    const markerCoordinates = [
      {
        coordinates: [75.88344166067415, 22.718454673983118],
        title: "Marker 1",
      },
      {
        coordinates: [75.87068922458161, 22.710741779857017],
        title: "Marker 2",
      },
     
      // Add more marker coordinates as needed
    ];

    // Add markers to the map
    markerCoordinates.forEach((marker, index) => {
      new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${marker.title}</h3>`))
        .addTo(map);
    });
  }, []);

  return <div id="map" style={{ width: "100vw", height: "400px" }} />;
};

export default MultipleMarkersMap;
