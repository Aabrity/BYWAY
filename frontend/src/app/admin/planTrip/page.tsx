"use client"
import React, { useEffect, useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<any[]>([]); // Change 'any' to the type of your data if possible

  useEffect(() => {
    // Fetch data on component mount
    getSubmissions();
  }, []);

  function getSubmissions() {
    console.log('Fetching submissions...');
    fetch('http://localhost:8081/planTrip/gettrip')
      .then(response => response.json())
      .then(submissions => {
        console.log('Submissions received:', submissions);
        setSubmissions(submissions); // Update state with fetched submissions
      })
      .catch(error => {
        console.error('Error fetching submissions:', error);
      });
  }

  function handleDelete(submissionId: string) {
    fetch(`http://localhost:8081/planTrip/api/delete/${submissionId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(result => {
        console.log('Submission deleted successfully:', result);
        getSubmissions(); // Refresh submissions after deletion
      })
      .catch(error => {
        console.error('Error deleting submission:', error);
      });
  }

  return (
    <div className='font-san py-14 '>
      
  <table className="w-full border-collapse mt-20 text-gray-700 ">
      <thead >
            <tr >
            <th className='bg-gray-400 border border-gray-500 p-4'>S.N</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Name</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Email</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Phone Number</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Select Trip</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Trip Length</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Approx Date</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Adults</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Children</th>
                <th className='bg-gray-400 border border-gray-500 p-4'>Hotel Type</th>
                <th className='bg-gray-400 border border-gray-500 p-4 '>Tour Type</th>
                <th className='bg-gray-400 border border-gray-500 p-4 '>Estimated Budget</th>
                <th className='bg-gray-400 border border-gray-500 p-4 '>Guide Language</th>
                <th className='bg-gray-400 border border-gray-500 p-4 '>More Info</th>
                <th className='bg-gray-400 border border-gray-500 p-4 '>Select Country</th>
                <th className='bg-gray-400 border border-gray-500 p-4 '>Where Did You Find Us</th>
                <th className='bg-gray-400 border border-gray-500 p-4 '>Action</th>
            </tr>
        </thead>
        <tbody >
          {submissions.map(submission => (
         <tr className='group hover:bg-gray-500' key={submission.id}>
         {/* Map each property from your submission object */}
         {Object.values(submission).map((value, index) => (
           <td
             key={index}
             className='bg-gray-300 border border-gray-500 p-4 font-semibold font-mono group-hover:bg-gray-200'
           >
             {String(value)}
           </td>
         ))}
              <td className='bg-gray-300 border border-gray-500 p-4 font-semibold font-mono'>
                <button
                  className="button-delete bg-green-500 text-white px-4 py-2 rounded hover:bg-red-500"
                  onClick={() => handleDelete(submission.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;