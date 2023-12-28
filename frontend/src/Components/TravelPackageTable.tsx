// components/TravelPackageTable.tsx
import React from 'react';

type TravelPackageTableProps = {
  meals: string;
  accommodations: string;
  recommended_group_size: string;
};

const TravelPackageTable: React.FC<TravelPackageTableProps> = ({
  meals,
  accommodations,
  recommended_group_size,
}) => {
  return (
    <table className="w-full mt-4 border-collapse border border-gray-400">
      <tbody>
        <tr>
          <td className="font-semibold pr-2 border border-gray-400">Meals:</td>
          <td className="border border-gray-400">{meals}</td>
        </tr>
        <tr>
          <td className="font-semibold pr-2 border border-gray-400">Accommodations:</td>
          <td className="border border-gray-400">{accommodations}</td>
        </tr>
        <tr>
          <td className="font-semibold pr-2 border border-gray-400">Recommended Group Size:</td>
          <td className="border border-gray-400">{recommended_group_size}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TravelPackageTable;
