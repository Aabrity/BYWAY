"use client";
import React, { useState } from "react";
import { packagesData } from "../page"; 
import TravelPackageTable from "@/Components/Packages/TravelPackageTable";
import ExpandableSection from "@/Components/Packages/DropDown";
import HeaderTab from "@/Components/Header";
import FooterTab from "@/Components/Footer";


const ProductPage = () => {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  const selectedPackage = packagesData[selectedPackageIndex];
  const [imgSrc, setImgSrc] = useState(selectedPackage.imgArray[0]);

  const handleImageClick = (index) => {
    const clickedImgSrc = selectedPackage.imgArray[index];
    setImgSrc(clickedImgSrc);
  };

  const nextPackage = () => {
    const nextIndex = (selectedPackageIndex + 1) % packagesData.length;
    setSelectedPackageIndex(nextIndex);
  };

  const previousPackage = () => {
    const previousIndex =
      (selectedPackageIndex - 1 + packagesData.length) % packagesData.length;
    setSelectedPackageIndex(previousIndex);
  };

  const numericPrice = parseFloat(selectedPackage.price);
  const discountPercentage = selectedPackage.discount
    ? parseFloat(selectedPackage.discount)
    : 0;
  const discountedPrice =
    numericPrice - (numericPrice * discountPercentage) / 100;

  return (
    <>
      <HeaderTab />
      <div className="mt-14 bg-amber-200">
        <div className="flex flex-col items-center justify-center overflow-hidden bg-amber-50 mt-4">
          <div className="max-w-7xl bg-amber-50">
            <h1 className="text-2xl font-bold mt-20 mb-10">
              {selectedPackage.title}
            </h1>
            <span className="text-violet-600 font-semibold mt-2">
              {selectedPackage.location}
            </span>

            <div className="flex flex-col justify-between lg:flex-row gap-16 ">
              <div className="flex flex-col gap-6 bg-amber-50  shadow-lg">
                <img
                  src={imgSrc}
                  alt={`Selected Image`}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="flex flex-row justify-left h-24">
                  {selectedPackage.imgArray.map((_, index) => (
                    <img
                      key={index}
                      src={selectedPackage.imgArray[index]}
                      alt={`Image ${index + 1}`}
                      className={`w-24 h-24 rounded-md cursor-pointer ${
                        imgSrc === selectedPackage.imgArray[index]
                          ? "border-2 border-blue-500"
                          : ""
                      }`}
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
                </div>
                <div className="flex  mt-1">
                  <button
                    className="  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mr-2"
                    onClick={previousPackage}
                  >
                    Previous Package
                  </button>
                  <button
                    className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mr-2"
                    onClick={nextPackage}
                  >
                    Next Package
                  </button>
                </div>
                <div className="flex flex-wrap flex-col gap-4 lg:w-full">
                  {/* Additional content goes here */}
                  <div className=" text-xl font-bold text-black ">About</div>
                  <p className="text-gray-700">{selectedPackage.description}</p>

                  {/* Container for Price Box and Table */}
                  <div className="flex flex-auto justify-between mt-4 ">
                    {/* Table */}

                    <div className="flex lg:w-2/3 flex-col">
                      <TravelPackageTable
                        meals={selectedPackage.meals}
                        accommodations={selectedPackage.accomodations}
                        accessibility={selectedPackage.recommended_group_size}
                        guidance_language={selectedPackage.accomodations}
                      />
                      <div className="">
                        {/* Uncommented ExpandableSection */}
                        <ExpandableSection
                          buttonLabel="What to expect"
                          expandedContent={<p>{selectedPackage.itinerary}</p>}
                        />
                        <ExpandableSection
                          buttonLabel="What is included"
                          expandedContent={<p>{selectedPackage.itinerary}</p>}
                        />
                        <ExpandableSection
                          buttonLabel="Highlights"
                          expandedContent={<p>{selectedPackage.itinerary}</p>}
                        />
                        <ExpandableSection
                          buttonLabel="Additional Information"
                          expandedContent={<p>{selectedPackage.itinerary}</p>}
                        />
                        <div className="pb-4"></div>
                      </div>
                    </div>

                    {/* Price Box */}
                    <div className="bg-amber-50 p-4 rounded-lg shadow-lg lg:w-1/3 h-44 ">
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
      </div>
      <FooterTab/>
    </>
  );
};

export default ProductPage;