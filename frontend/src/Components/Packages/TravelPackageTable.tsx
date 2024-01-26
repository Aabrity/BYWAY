// components/TravelPackageTable.tsx
import React from 'react';

type TravelPackageTableProps = {
  meals: string;
  depature_and_return: string;
  guidance_language: string;
  accessibility:string;
};

const TravelPackageTable: React.FC<TravelPackageTableProps> = ({
  depature_and_return,
  guidance_language,
  accessibility,
}) => {
  return (
    <table className="w-full mt-4 border-collapse border border-amber-50c">
      <tbody>

        <tr>
          <td className="font-semibold pr-2 border border-gray-400">Depature and Return:</td>
          <td className="border border-gray-400">{depature_and_return}</td>
        </tr>
        <tr>
          <td className="font-semibold pr-2 border border-gray-400">Guidance language:</td>
          <td className="border border-gray-400">{guidance_language}</td>
        </tr>
        <tr>
          <td className="font-semibold pr-2 border border-gray-400">Accessibility:</td>
          <td className="border border-gray-400">{accessibility}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TravelPackageTable;
