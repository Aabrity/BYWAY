'use client';
import React, { useState, useEffect } from 'react';
import StyledTable2 from '@/Components/Common/StyledTable2';
import axios from 'axios';

interface TableData {
  contact_id: string;
  email: string;
  phone: string;
  subject: string;
  address: string;
  message: string;
}

const Table: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/contactus/getcontacts")
      .then((response) => {
        const contactArray = response.data || [];
        const modifiedData = contactArray.map((item: TableData) => ({
          id: item.contact_id,
          email: item.email,
          contact: item.phone,
          subject: item.subject,
          address: item.address,
          message: item.message,
        }));
        setData(modifiedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message to the user
      });
  }, []);
  const handleDeleteClick = async (rowData: Record<string, any>) => {
    if (
      window.confirm(`Are you sure you want to delete blog ${rowData.id}?`)
    ) {
      try {
        const deleteResponse = await axios.delete(
          `http://localhost:8081/contactus/deletecontact/${rowData.id}`
        );

        if (deleteResponse.status === 200) {
          console.log("Delete successful. Fetching updated data...");

          // Fetch the updated data and set it in the state
          fetchUpdatedData();

          // Display alert after updating state
          alert(`${rowData.email}'s enquiry deleted successfully`);
        } else {
          console.error("Delete request failed:", deleteResponse);
          alert(deleteResponse.data.message || "Delete request failed");
        }
      } catch (error) {
        console.error("Error deleting or fetching data:", error);
        alert(
          "Error deleting or fetching data. Please check the console for more details."
        );
      }
    }
  };

  const fetchUpdatedData = () => {
    axios
      .get("http://localhost:8081/contactus/getcontacts")
      .then((response) => {
        const contactArray = response.data || [];
        const modifiedData = contactArray.map((item: TableData) => ({
          id: item.contact_id,
          email: item.email,
          contact: item.phone,
          subject: item.subject,
          address: item.address,
          message: item.message,
        }));
        setData(modifiedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const tableHeaders = ["Id", "Email", "Contact", "Subject", "Address", "Message","Actions"];

  return (
    <div className="overflow-x-auto">
      <StyledTable2
        data={data}
        headers={tableHeaders}
        tdClass="text-blue-500 font-semibold"
        onDeleteClick={handleDeleteClick}
        
      />
    </div>
  );
};

export default Table;