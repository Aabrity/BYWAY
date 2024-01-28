
"use client";
import HeaderTab from "@/Components/Header";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/blogs/getblogs/${params.id}`);
        console.log('Retrieved data:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching package data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPackageData();

  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <HeaderTab />
  
      <div>
        {data.image && (
          <img
            style={{ display: 'flex', width: '100%', height: '500px',marginTop:"135px" }}
            src={`data:image/jpeg;base64,${Buffer.from(data.image).toString('base64')}`}
            alt={data.title}
          />
        )}
  
        <h1 className="text-white text-3xl font-semibold font-mono bg-green-700  flex items-center justify-start h-28 w-full px-11">
          {data.title}
        </h1>
  
        <p className="flex text-1xl font-mono justify-center items-center pt-6 p-11">{data.description}</p>
      </div>
    </div>
  );
        }  