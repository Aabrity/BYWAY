"use client";
import React, { useState } from 'react';
import { packagesData } from '../page';
import TravelPackageTable from '@/Components/TravelPackageTable';

const ProductPage = () => {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  const selectedPackage = packagesData[selectedPackageIndex];
  const [imgSrc, setImgSrc] = useState(selectedPackage.imgArray[0]);

  const handleImageClick = (index) => {
    const clickedImgSrc = selectedPackage.imgArray[index];
    setImgSrc(clickedImgSrc);
  };

  const nextPackage = () => {
    const nextIndex = (selectedPackageIndex + 1) % packagesData[0].imgArray.length;
    setSelectedPackageIndex(nextIndex);
  };

  const previousPackage = () => {
    const previousIndex =
      (selectedPackageIndex - 1 + packagesData[0].imgArray.length) % packagesData[0].imgArray.length;
    setSelectedPackageIndex(previousIndex);
  };

  return (
    <div className='bg-gray-300'>
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center pt-16 '>
      <div className='flex flex-col gap-6 lg:w-2/4'>
        <img
          src={imgSrc}
          alt={`Selected Image`}
          className='w-full h-full aspect-square object-cover rounded-xl'
        />

        <div className='flex flex-row justify-left h-24'>
          {selectedPackage.imgArray.map((_, index) => (
            <img
              key={index}
              src={selectedPackage.imgArray[index]}
              alt={`Image ${index + 1}`}
              className={`w-24 h-24 rounded-md cursor-pointer ${
                imgSrc === selectedPackage.imgArray[index] ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>

        <div className='flex'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-4 mr-2'
            onClick={previousPackage}
          >
            Previous Package
          </button>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-4'
            onClick={nextPackage}
          >
            Next Package
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <h1 className='text-3xl font-bold'>{selectedPackage.title}</h1>
          <span className='text-violet-600 font-semibold'>{selectedPackage.location}</span>
        </div>
        <p className='text-gray-700'>{selectedPackage.description}</p>
        <h6 className='text-2xl font-semibold'>{`$ ${selectedPackage.price}`}</h6>
        
        <TravelPackageTable
          meals={selectedPackage.meals}
          accommodations={selectedPackage.accomodations}
          recommended_group_size={selectedPackage.recommended_group_size}
        />
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
