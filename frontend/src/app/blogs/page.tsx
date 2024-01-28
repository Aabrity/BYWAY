"use client";

import HeaderTab from "@/Components/Header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogContainer from "./BlogContainer";

interface Blog {
  id:  number;
  title: string;
  description: string;
  published_date: string;
  image: Buffer;
  category: "Trending" | "Normal";
}

interface BlogContainerProps {
  title: string;
  description: string;
  publishedDate: string;
  imageSrc: string;
}

function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogData, setBlogData] = useState<Array<Blog>>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/blogs/getblogs")
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  //Searched box filtered
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //Two category
  const trendingBlogs = filteredBlogData
    .filter((blog) => blog.category === "Trending")
    .slice(0, 10);
  const recentBlogs = filteredBlogData.filter(
    (blog) => blog.category === "Normal"
  );

  const truncateTitle = (title: string, maxWords: number): string[] => {
    const words = title.split(' ');
  
    if (words.length > maxWords) {
      const truncatedTitle = words.slice(0, maxWords).join(' ');
      const remainingWords = words.slice(maxWords).join(' ');
      return [truncatedTitle, remainingWords];
    }
  
    return [title];
  };
  
  
  return (
    <>
      <HeaderTab />
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


    
      
<div
  style={{
    
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    wordWrap:"break-word",
    flexWrap: "wrap",
    justifyContent: "center", 
    alignItems: "center", 
    overflowX: "auto",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  }}
>
  {trendingBlogs.map((blog, index) => (
    <Link key={index} href={`/blogs/[id]`} as={`/blogs/${blog.id}`}>
     
       
        <BlogContainer
           title={truncateTitle(blog.title, 5)}
          publishedDate={blog.published_date}
          imageSrc={
            blog.image
              ? `data:image/jpeg;base64,${Buffer.from(blog.image).toString(
                  "base64"
                )}`
              : ""
          }
        />
   
      
    </Link>
  ))}
</div>

      <div>
        <h1 style={{ fontSize: "40px", margin: "30px 0", padding: "10px" }}>
          <b>Recent Blogs</b>
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          paddingLeft: "20px",
          
        }}
      >
        {recentBlogs.map((blog, index) => (
          <Link  href={"/blogs/[id]"} as={`/blogs/${blog.id}`} >
          <RecentBlogContainer 
            key={index}
            title={blog.title}
            description={blog.description.slice(0, 350) + "..."} // Limit description to 150 characters
            publishedDate={blog.published_date}
            imageSrc={
              blog.image
                ? `data:image/jpeg;base64,${Buffer.from(blog.image).toString(
                    "base64"
                  )}`
                : ""
            }
          />
          </Link>
        ))}
      </div>

     
    </>
  );
}

const RecentBlogContainer: React.FC<BlogContainerProps> = ({
  title,
  description,
  publishedDate,
  imageSrc,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
       
      }}
    >
      {/* Left side for Image */}
      <div style={{ flex: "0 0 30%", marginRight: "20px" }}>
        <img
          src={imageSrc}
          alt="Blog Cover"
          style={{  borderRadius: "8px", width: '450px', height: '250px' }}
        />
      </div>

      {/* Right side for Content */}
      <div style={{ flex: "1" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{title}</h2>
        <p style={{ fontSize: "16px", color: "#555" }}>{description}</p>
        <div style={{ marginTop: "auto", textAlign: "right" }}>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#888" }}>
            {publishedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;


