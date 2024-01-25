"use client";
import React, { useEffect, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat, transform } from "ol/proj";
import { useRef } from "react";
import axios from "axios";
import { Style } from "ol/style";
import Icon from "ol/style/Icon";


interface SelectedLocation {
  name: string;
  longitude: number;
  latitude: number;
}
interface AdminMapProps {
  id: string;
}

export const AdminMap: React.FC<AdminMapProps> = ({id}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [map, setMap] = useState<Map | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);

  // Use useRef to store a reference to the markerLayer
  const markerLayerRef = useRef<VectorLayer<VectorSource> | null>(null);

  useEffect(() => {
    const mapInstance = new Map({
      target: id,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([83.1258, 28.3974]),
        zoom: 3,
        maxZoom: 30,
        minZoom: 7.2,
      }),
    });

    // Create the markerLayer once
    const markerLayer = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Icon({
          src: "pointer.svg",
          scale: 0.5, // Adjust this value to change the size of the SVG icon
        }),
      }),
    });

    // Add the markerLayer to the map
    mapInstance.addLayer(markerLayer);

    // Store a reference to markerLayer
    markerLayerRef.current = markerLayer;

    setMap(mapInstance);

    return () => {
      if (mapInstance) {
        mapInstance.dispose();
      }
    };
  }, [id]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}&countrycodes=NPL&bounded=1`
      );

      if (response.data.length > 0) {
        const result = response.data[0];
        const [lon, lat] = [parseFloat(result.lon), parseFloat(result.lat)];

        console.log("Destination Location:", { latitude: lat, longitude: lon });

        // Transform the coordinates to the map's projection
        const [transformedLon, transformedLat] = transform(
          [lon, lat],
          "EPSG:4326",
          "EPSG:3857"
        );

        // Display the location in the box
        setSelectedLocation({
          name: result.display_name,
          longitude: transformedLon,
          latitude: transformedLat,
        });

        const isWithinBounds =
          transformedLon >= 8000000 &&
          transformedLon <= 10000000 &&
          transformedLat >= 2500000 &&
          transformedLat <= 3500000;

        console.log("Transformed Coordinates:", {
          transformedLon,
          transformedLat,
        });

        if (isWithinBounds && map) {
          // Animate to the searched location
          map.getView().animate({
            center: [transformedLon, transformedLat],
            duration: 1000, // Animation duration in milliseconds
            zoom: 8, // You can adjust the zoom level as needed
          });

          // Clear existing features from the markerLayer
          const mapSource = markerLayerRef.current?.getSource();
          if (mapSource) {
            mapSource.clear();
          }

          // Add a new feature for the searched location
          mapSource?.addFeature(
            new Feature({
              geometry: new Point([transformedLon, transformedLat]),
            })
          );
        } else {
          alert("We only guide you throughout Nepal.");
        }
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Error fetching geocoding data:", error);
      alert("Error fetching geocoding data. Please try again.");
    }
  };

  const handleSetLocation = async () => {
    try {
      if (selectedLocation) {
        const response = await axios.post(
          "http://localhost:8081/maps/saveLocation",
          {
            location_name: selectedLocation.name,
            longitude: selectedLocation.longitude,
            latitude: selectedLocation.latitude,
          }
        );

        alert(response.data.message);
      } else {
        alert("No location selected.");
      }
    } catch (error) {
      console.error("Error saving location:", error);
      alert("Error saving location. Please try again.");
    }
  };

  return (
    <div className="w-full h-full p-10 bg-green-200 rounded-md">
      {/* Adjust the div styles based on your layout requirements */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-black p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-md ml-2"
        >
          Search
        </button>
      </div>
      {selectedLocation && (
        <div style={{ marginBottom: "10px" }}>
          <p>Name: {selectedLocation.name}</p>
          <p>Longitude: {selectedLocation.longitude}</p>
          <p>Latitude: {selectedLocation.latitude}</p>
          <button
            onClick={handleSetLocation}
            className="bg-green-500 text-white p-2 rounded-md"
          >
            Set in Map
          </button>
        </div>
      )}
      <div
        id={id}
        className="mx-auto w-full h-[70vh] border border-gray-300 rounded-md"
      ></div>
    </div>
  );
};


