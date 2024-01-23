// "use client"
// import React, { useEffect, useState } from "react";
// import "ol/ol.css";
// import Map from "ol/Map";
// import TileLayer from "ol/layer/Tile";
// import View from "ol/View";
// import OSM from "ol/source/OSM";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { Style } from "ol/style";
// import Icon from "ol/style/Icon";
// import { fromLonLat } from "ol/proj";

// interface ClientMapProps {
//   id: string;
// }

// interface Location {
//   longitude: number;
//   latitude: number;
// }

// export const ClientMap: React.FC<ClientMapProps> = ({ id }) => {
//   const [map, setMap] = useState<Map | null>(null);
//   const [locations, setLocations] = useState<Location[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch locations from the server
//         const response = await fetch("http://localhost:8000/api/getLocations");
//         const data = await response.json();
//         setLocations(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Check if both map and locations are available
//     if (map && locations.length > 0) {
//       const markerLayer = new VectorLayer({
//         source: new VectorSource(),
//         style: new Style({
//           image: new Icon({
//             src: "pointer.svg",
//             scale: 0.5,
//           }),
//         }),
//       });

//       map.addLayer(markerLayer);

//       // Add a new feature for each location
//       const mapSource = markerLayer.getSource();
//       locations.forEach((location) => {
//         mapSource?.addFeature(
//           new Feature({
//             geometry: new Point([location.longitude, location.latitude]),
//           })
//         );
//       });
//     }
//   }, [map, locations]);

//   useEffect(() => {
//     // Create the map instance
//     if (map === null) {
//       const mapInstance = new Map({
//         target: id,
//         layers: [
//           new TileLayer({
//             source: new OSM(),
//           }),
//         ],
//         view: new View({
//           center: fromLonLat([83.1258, 28.3974]),
//           zoom: 3,
//           maxZoom: 30,
//           minZoom: 7.2,
//         }),
//       });

//       setMap(mapInstance);
//     }

//     return () => {
//       if (map) {
//         map.dispose();
//       }
//     };
//   }, [id, map]);

//   return (
//     <div className="w-full h-full p-10 bg-green-200 rounded-md">
//       <div
//         id={id}
//         className="mx-auto w-full h-[70vh] border border-gray-300 rounded-md"
//       ></div>
//     </div>
//   );
// };

"use client";
import React, { useEffect, useState, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Style } from "ol/style";
import Icon from "ol/style/Icon";
import { fromLonLat } from "ol/proj";

interface ClientMapProps {
  id: string;
}

interface Location {
  longitude: number;
  latitude: number;
}

export const ClientMap: React.FC<ClientMapProps> = ({ id }) => {
  const mapRef = useRef<Map | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch locations from the server
        const response = await fetch("http://localhost:8000/api/getLocations");
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (locations.length > 0) {
      if (!mapRef.current) {
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

        mapRef.current = mapInstance;
      }

      const markerLayer = new VectorLayer({
        source: new VectorSource(),
        style: new Style({
          image: new Icon({
            src: "pointer.svg",
            anchor: [0.5, 1],
            anchorXUnits: "fraction",
            anchorYUnits: "fraction",
            scale: 0.5,
          }),
        }),
      });

      mapRef.current.addLayer(markerLayer);

      // Add a new feature for each location
      const mapSource = markerLayer.getSource();
      locations.forEach((location) => {
        mapSource?.addFeature(
          new Feature({
            geometry: new Point([location.longitude, location.latitude]),
          })
        );
      });
    }
  }, [locations, id]);

  return (
    <div className="w-full h-full p-10 bg-green-200 rounded-md">
      <div
        id={id}
        className="mx-auto w-full h-[70vh] border border-gray-300 rounded-md"
      ></div>
    </div>
  );
};
