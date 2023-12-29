"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogContainer from './BlogContainer';

interface Blog {
  title: string;
  description: string;
  published_date: string;
  image: Buffer; // Assuming image is a Buffer, adjust if needed
  // Add other properties as needed
}


function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogData, setBlogData] = useState<Array<Blog>>([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/get-blogs')
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  }, []);


  //Searched box filtered 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

      <div style={{ height: "60vh", position: "relative" }}>
        <Image
          src="/assets/coverimage.jpg"
          alt="Cover Image "
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />

        {/* Search bar */}
        <div
          style={{
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "750px",
            textAlign: "center",
          }}
        >
          <form>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: "70%",
              padding: "10px",
              marginRight: "5px",
              borderRadius: "2px",
              border: "0px solid #fff",
            }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
            <button
              type="submit"
              style={{
                padding: "7px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                color: "white",
                border: "0px",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "green")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "transparent")
              }
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: "40px", margin: "30px 0", padding: "10px" }}>
          <b>Top Trending Blogs</b>
        </h1>
      </div>

      <div style={{ display: "flex", gap: "1.3%", overflowX: "auto", paddingLeft: "1%", paddingRight: "1%" }}>
      {filteredBlogData?.map((blog, index) => (
          <BlogContainer
            key={index}
            title={blog.title}
            description={blog.description}
            publishedDate={blog.published_date}
            imageSrc={blog.image ? `data:image/jpeg;base64,${Buffer.from(blog.image).toString('base64')}` : ''}
          />
        ))}
      </div>
      
    </>
    
    
  );
}

export default Blogs;
