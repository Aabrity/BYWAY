"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import StyledTable from "../Common/StyledTable";




  
  export const PackageTable = () => {


    interface PackageItem {
        package_id: string;
        package_title: string;
        location_id: string;
        price: number;
        discount: number;
       
      }
      
      const [tableData, setTableData] = useState([]);
    
      useEffect(() => {
        // Fetching packages data
        axios.get("http://localhost:8081/packages/getpackages")
          .then((response) => {
            const packagesArray = response.data.packages || [];
            const modifiedData = packagesArray.map((item:PackageItem) => ({
              packageid: item.package_id,
              name: item.package_title,
              locationsid: item.location_id,
              price: item.price,
              discount: item.discount,
            }));
            setTableData(modifiedData);
          })
          .catch((error) => console.error("Error fetching data:", error));
    
      }, []);
    
    
      
    
      const tableHeaders = [
        "PackageId",
        "Name",
        "LocationsId",
        "Price",
        "Discount",
        "Actions",
      ];
    
      //table button event handlers------------------------------------------
      const handleEditClick = (rowData: Record<string, any>) => {
        // Fetch the complete data for the selected package from the database
        axios
          .get(`http://localhost:8081/packages/getselectedpackage/${rowData.packageid}`)
          .then((res) => {
            const completeData = res.data.package; 
            setFormState({
              packageid:completeData.package_id || 0,
              title: completeData.package_title || "",
              location_id: completeData.location_id || 0,
              about: completeData.about || "",
              guidance_language: completeData.guidance_language || "",
              whats_included: completeData.whats_included || "",
              what_to_expect: completeData.what_to_expect || "",
              departure_and_return: completeData.departure_and_return || "",
              accessibility: completeData.accessibility || "",
              additional_info: completeData.additional_info || "",
              price: completeData.price || "",
              discount: completeData.discount || "",
            });
          })
          .catch((err) => console.log(err));
      };
      const handleDeleteClick = async (rowData: Record<string, any>) => {
        if (window.confirm(`Are you sure you want to delete package ${rowData.packageid}?`)) {
          try {
            const deleteResponse = await axios.delete(`http://localhost:8081/packages/deletepackages/${rowData.packageid}`);
            console.log("Delete Response:", deleteResponse);
      
            if (deleteResponse.status === 200) {
              
              console.log("Delete successful. Fetching updated data...");
      
              const packagesResponse = await axios.get("http://localhost:8081/packages/getpackages");
              console.log("Packages Response:", packagesResponse);
      
              const packagesArray = packagesResponse.data.packages || [];
              const modifiedData = packagesArray.map((item:PackageItem) => ({
                packageid: item.package_id,
                name: item.package_title,
                locationsid: item.location_id,
                price: item.price,
                discount: item.discount,
              }));
      
              setTableData(modifiedData);
      
              // Display alert after updating state
              alert(`Package ${rowData.packageid} deleted successfully`);
            } else {
              console.error("Delete request failed:", deleteResponse);
              alert(deleteResponse.data.message || "Delete request failed");
            }
          } catch (error) {
            console.error("Error deleting or fetching data:", error);
            alert("Error deleting or fetching data. Please check the console for more details.");
          }
        }
      };

    return (
      <div>
              <div className="w-1/2 mt-40">
        <StyledTable
          data={tableData}
          headers={tableHeaders}
          tdClass="text-blue-500 font-semibold"
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      </div>
      </div>
    )
  }
  
