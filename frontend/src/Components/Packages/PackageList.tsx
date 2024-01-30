'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import ReferencePackageItem from '@/Components/Packages/ReferencePackageItem';

const PackageList = () => {
    const [packageData, setPackageData] = useState([
        {
          package_id: '1',
          package_title: 'Test Package 1',
          image1: '/assets/pokhara.jpg',
          price: '500',
          about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          duration: '7',
          discount: '10',
        },
        {
          package_id: '2',
          package_title: 'Test Package 2',
          image1: '/assets/everest-base-camp-10.jpg',
          price: '750',
          about: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          duration: '5',
          discount: '5',
        },
        //dummy data 
      ]);

//   useEffect(() => {
//     const fetchPackagesData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8081/packages/getPackages');
//         const packagesArray = response.data.packages;

//         if (Array.isArray(packagesArray)) {
//           setPackageData(packagesArray);
//         } else {
//           console.error("Invalid data format: 'packages' property is not an array", response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching package data:', error);
//       }
//     };

//     fetchPackagesData();
//   }, []);

  return (
    <section className="flex py-16 md:py-20 lg:py-28 justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
          {packageData.map((packageItem) => (
            <ReferencePackageItem
              key={packageItem.package_id}
              package_title={packageItem.package_title}
              imgSrc={packageItem.image1}
              price={packageItem.price.toString()}
              about={packageItem.about}
              package_id={packageItem.package_id.toString()}
              duration={packageItem.package_id}
              discount={packageItem.discount.toString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageList;
