"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import HeaderTab from "@/Components/Header";
import TravelPackageTable from "@/Components/Packages/TravelPackageTable";
import ExpandableSection from "@/Components/Packages/DropDown";
import WalkingAnimation from "@/Components/Common/Loader";


export default function Page({ params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationName, setLocationName] = useState(null); // Added locationName state

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/packages/getSelectedPackage/${params.package_id}`
        );
        console.log("Retrieved data:", response.data.package);
        setData(response.data.package);

        const locationId = response.data.package.location_id;
        console.log(locationId);

        const locationResponse = await axios.get(
          `http://localhost:8081/maps/fetchLocationName/${locationId}`
        );
        console.log("Location Response:", locationResponse);

        // Access 'locationName' directly from 'data'
        const locationName = locationResponse.data.locationName;
        console.log("Retrieved location name:", locationName);

        // Set the locationName in state
        setLocationName(locationName);
      } catch (error) {
        console.error("Error fetching package data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackageData();
  }, [params.package_id]);

  if (loading) {
    return (
      <div>
        <WalkingAnimation />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <WalkingAnimation />
      </div>
    );
  }



  const numericPrice = parseInt(data.price);
  const discountPercentage = parseInt(data.discount);

  if (isNaN(numericPrice) || isNaN(discountPercentage)) {
    console.error("Invalid price or discount:", data.price, data.discount);
    return null;
  }

  const discountedPrice =
    numericPrice - (numericPrice * discountPercentage) / 100;



  return (
    <>
      <HeaderTab />

      <div className="flex py-16 md:py-20 lg:py-28 justify-center bg-slate-50">
        <div className="max-w-7xl w-full">
          <h1 className="text-2xl font-bold mt-5 mb-5">
            {data.package_title}
          </h1>
          <span className="text-violet-600 font-semibold mt-2 mb-">
          {locationName}
          </span>

          <div className="flex flex-col justify-between lg:flex-row gap-16 mt-2">
            <div className="flex flex-col gap-6 w-full ">
              <div className="flex items-stretch h-96 rounded-3xl">
                {data.image1 && (
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(
                      data.image1
                    ).toString("base64")}`}
                    alt={data.package_title}
                    className="w-2/3 h-auto object-cover "
                    
                  />
                )}

                <div className="flex flex-col ml-4 w-1/2">
                {data.image2 && (
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(
                      data.image2
                    ).toString("base64")}`}
                    alt={data.package_title}
                    
                    className="h-1/2 w-3/4 mb-2 "
                  />
                )}
                {data.image3 && (
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(
                      data.image3
                    ).toString("base64")}`}
                    alt={data.package_title}
                    
                    className="h-1/2 w-3/4 "
                  />
                )}
                </div>
              </div>

              <div className="flex flex-wrap flex-col gap-4 bg-slate-50">
                {/* Additional content goes here */}
                <div className="text-xl font-bold text-black">About</div>
                <p className="text-gray-700">{data.about}</p>

                {/* Container for Price Box and Table */}
                <div className="flex flex-auto  mt-4">
                  {/* Table */}
                  <div className="flex lg:w-2/3 flex-col">
                    <TravelPackageTable
                      depature_and_return={data.departure_and_return}
                      accessibility={data.accessibility}
                      guidance_language={data.guidance_language}
                    />
                    <div>
                      {/* Uncommented ExpandableSection */}
                      <ExpandableSection
                        buttonLabel="What to expect"
                        expandedContent={<p>{data.what_to_expect}</p>}
                      />
                      <ExpandableSection
                        buttonLabel="What is included"
                        expandedContent={<p>{data.whats_included}</p>}
                      />
                      <ExpandableSection
                        buttonLabel="Highlights"
                        expandedContent={<p>{data.itinerary}</p>}
                      />
                      <ExpandableSection
                        buttonLabel="Additional Information"
                        expandedContent={<p>{data.additional_info}</p>}
                      />
                      <div className="pb-4"></div>
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="p-4 rounded-lg shadow-lg lg:w-1/4 h-44">
                    <h2 className="text-xl font-bold mb-2">Package Price:</h2>
                    {discountPercentage > 0 ? (
                      <div>
                        <span className="text-red-500 text-2xl font-semibold">
                          {`$ ${discountedPrice.toFixed(2)}`}
                        </span>
                        <br />
                        <span className="line-through text-gray-500">{`$ ${numericPrice.toFixed(
                          2
                        )}`}</span>
                      </div>
                    ) : (
                      <span className="text-2xl font-semibold">{`$ ${numericPrice.toFixed(
                        2
                      )}`}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function convertImageToBase64(
  imageBlob: Blob,
  callback: (base64Data: string | null) => void
) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result as string);
  };
  reader.readAsDataURL(imageBlob);
}


