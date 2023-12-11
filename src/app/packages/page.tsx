import React from "react";
import "./tpackages.css";

import Image from "next/image";

const PackageItem = ({ imageSrc, duration, packageName, description }) => {
  return (
    <div className="package_list-wrap group relative overflow-hidden">
      <div className="package-item">
        <div className="package-image relative">
          <Image
            src={imageSrc}
            alt="Package Image"
            width={300}
            height={200}
            className="group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="duration">{duration}</div>
          <div className="text-black">{packageName}</div>
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-4">
            <p className="font-bold">
                        {description}
                      </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tpackages = () => {
  const packagesData = [
    {
      imageSrc: "/images/istockphoto-1352722699-612x612.jpg",
      duration: "Duration: 66 days",
      packageName: "Package Name",
      description:
        "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    },
  ];
  const packagesData2 = [
    {
      imageSrc: "/images/istockphoto-866904464-612x612.jpg",
      duration: "Duration: 66 days",
      packageName: "Package Name",
      description:
        "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    },
  ];

  return (
    <div 
    id="main_wrapper"
    style={{
      backgroundColor: "lightgray",
      width: "100vw",
      height: "100",
      margin: 0,
      padding: 0,
    }}>
      
      <div className="Container_img_quote flex justify-center items-center overflow-x-auto">
        <div className="inputs" >
          <div className="input relative h-full">
            <input
              type="search"
              placeholder=""
              className="pl-4 pr-10 py-3 border rounded text-black w-1000 opacity-75"
            />
            <button
              className="absolute right-3 top-3 h-full text-gray-500 focus:outline-none"
              // onClick={() => {
              //   // Handle button click
              // }}
            >
              <img
                src="/images/searchicon.png"
                alt="Search Icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="Main_Content overflow-auto" style={{ height: "400px" }}>
        <div className="list_packages packages_grid grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                    {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                              {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
                                        {packagesData.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
          {packagesData2.map((packageData, index) => (
            <PackageItem key={index} {...packageData} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tpackages;