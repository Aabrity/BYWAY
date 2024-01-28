import React from "react";
import { MdOutlineDelete } from "react-icons/md";

interface StyledTableProps {
  data: Array<Record<string, any>>;
  headers: Array<string>;
  tdClass: string;
  onEditClick?: (rowData: Record<string, any>) => void;
  onDeleteClick?: (rowData: Record<string, any>) => void;
}

const StyledTable: React.FC<StyledTableProps> = ({ data, headers, tdClass, onEditClick, onDeleteClick }) => {
  const handleDeleteClick = (row: Record<string, any>) => {
    if (onDeleteClick) {
      onDeleteClick(row);
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-teal-500 text-white font-bold">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? 'bg-gray-200' : ''
              } ${
                row.isActive ? 'active-row font-bold text-teal-500' : ''
              }`}
            >
              {headers.map((header, colIndex) => (
                <td key={colIndex} className={`px-4 py-2 ${tdClass} text-center`}>
                  {colIndex === headers.length - 1 ? (
                    
                    <>
                      <td className="px-4 py-2 text-center">
                        <button className="bg-teal-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteClick(row)}>
                          <MdOutlineDelete /> 
                        </button>
                      </td>
                    </>
                  ) : (
                    // Otherwise, display the data
                    row[header.toLowerCase()]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StyledTable;