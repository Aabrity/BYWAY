"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogContainer from './BlogContainer';
import LogoutModal from './LogoutModel';


interface Blog {
  title: string;
  description: string;
  published_date: string;
  image: Buffer; 
  category: 'Trending' | 'Normal';
 
}

interface BlogContainerProps {
  title: string;
  description: string;
  publishedDate: string;
  imageSrc: string;
}


function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogData, setBlogData] = useState<Array<Blog>>([]);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  
  
  useEffect(() => {
    axios.get('http://localhost:8081/blogs/getblogs')
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

  const trendingBlogs = filteredBlogData.filter(blog => blog.category === 'Trending').slice(0, 3);
  const recentBlogs = filteredBlogData.filter(blog => blog.category === 'Normal');

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
        {trendingBlogs.map((blog, index) => (
          <BlogContainer
            key={index}
            title={blog.title}
            description={blog.description}
            publishedDate={blog.published_date}
            imageSrc={blog.image ? `data:image/jpeg;base64,${Buffer.from(blog.image).toString('base64')}` : ''}
          />
        ))}
      </div>

      <div>
        <h1 style={{ fontSize: "40px", margin: "30px 0", padding: "10px" }}>
          <b>Recent Blogs</b>
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "20px" }}>
        {recentBlogs.map((blog, index) => (
          <RecentBlogContainer
            key={index}
            title={blog.title}
            description={blog.description.slice(0, 350) + '...'} // Limit description to 150 characters
            publishedDate={blog.published_date}
            imageSrc={blog.image ? `data:image/jpeg;base64,${Buffer.from(blog.image).toString('base64')}` : ''}
          />
        ))}
      </div>

    

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "20px" }}>
        {recentBlogs.map((blog, index) => (
          <RecentBlogContainer
            key={index}
            title={blog.title}
            description={blog.description.slice(0, 150) + '...'}
            publishedDate={blog.published_date}
            imageSrc={blog.image ? `data:image/jpeg;base64,${Buffer.from(blog.image).toString('base64')}` : ''}
          />
        ))}
      </div>

    </>
  );
}

const RecentBlogContainer: React.FC<BlogContainerProps> = ({ title, description, publishedDate, imageSrc }) => {
  return (
    <div style={{ display: 'flex', width: '80%', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {/* Left side for Image */}
      <div style={{ flex: '0 0 30%', marginRight: '20px' }}>
        <img
          src={imageSrc}
          alt="Blog Cover"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>

      {/* Right side for Content */}
      <div style={{ flex: '1' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{title}</h2>
        <p style={{ fontSize: '16px', color: '#555' }}>{description}</p>
        <div style={{ marginTop: 'auto', textAlign: 'right' }}>
          <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#888' }}>{publishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
