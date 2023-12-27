"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollableContainer from "@/Components/ScrollableContainer.";
import ScrollUp from "@/Components/ScrollUp";
import DetailView from "@/Components/DetailView";
import Paragraph from "@/Components/Paragraph";

function Blogs() {
  const [showDetailView, setShowDetailView] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [blogData, setBlogData] = useState(null);

  // const filteredBlogData = blogData?.filter((blog) =>
  //   blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:3001/api/get-blog-data')
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  }, []);

  const openDetailView = () => {
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
  };

  const toggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  const closeFullContent = () => {
    setShowFullContent(false);
  };
  return (
    <>
      <div style={{ height: "60vh", position: "relative" }}>
        <Image
          src="/assets/pokhera thulokot.webp"
          alt="Everest Base Camp"
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
      {/* Scrollable Containers */}
      <ScrollableContainer>


        {/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/assets/pokhera thulokot.webp"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/assets/pokhera thulokot.webp"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>


        {/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/assets/pokhera thulokot.webp"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/assets/pokhera thulokot.webp"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>




{/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/images/istockphoto-1352722699-612x612.jpg"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/images/coverimage.jpg"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>



{/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/everest-base-camp-10.jpg"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/assets/pokhera thulokot.webp"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>

{/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/images/Mountains 1.jpg"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/images/bob.png"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>


{/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/assets/pokhera thulokot.webp"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/images/istockphoto-1352722699-612x612.jpg"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>


{/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/images/Mountains 1.jpg"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/coverimage.jpg"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>


{/* Container number 1 */}
<div
  style={{
    flexShrink: 0,
    width: "500px",
    marginRight: "10px",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  }}

>

<div>
      {/* title and Date of the container  */}
      <h2
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        The ABC trek
      </h2>
      <small>Date: December 23, 2023</small>
    </div>

  <div style={{ height: "500px", position: "relative" }}>
    <img
      src="/ABC.jpg"
      alt="Pokhera"
      width={600}
      height={150}
      style={{ marginBottom: "10px" }}
      
    />
    
    {/* Display only a portion of the content initially */}
    {showFullContent ? (
      <>

        <div style={{ float: "left", width: "50%" }}>
          <img
            src="/assets/pokhera thulokot.webp"
            alt="Pokhera"
            width={300}
            height={150}
          />
        </div>
        <div style={{ float: "right", width: "50%" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>The ABC trek</h1>
          <small>Date: December 23, 2023</small>
          <p>{/* Your full content goes here */}</p>
          <button onClick={closeFullContent}>Close</button>
        </div>
      </>
    ) : (
      <>
        <p>
          This trek is also known as the Annapurna Sanctuary trek; Trail Follows
          winding trails along forested slopes and treks alongside rushing
          rivers of surpassing beauty as we approach Annapurna Base Camp on this
          uniquely accessible six-day itinerary.It`&apos;`s an incredible
          combination of diverse cultures and nature.
        </p>
        <button onClick={toggleFullContent}>Read More</button>
      </>
    )}
  </div>
</div>



      </ScrollableContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Adjust as needed
        }}
      >
        <h1 style={{ fontSize: "40px", margin: "30px 0", padding: "10px" }}>
          <b>Recent Travels</b>
        </h1>

        <ScrollUp>
          {/* Container for Recent Travels */}
          <div
            style={{
              flexShrink: 0,
              width: "90%", // Adjust the width as needed
              maxWidth: "900px", // Add a maximum width if desired
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              boxSizing: "border-box", // Add this property to include padding and border in the width
            }}
            onClick={openDetailView}
          >
            {/* Container content */}
            <div style={{ height: "500px", position: "relative" }}>
              <Image
                src="/pokhera thulokot.webp"
                alt="Travel Image"
                width={600}
                height={150}
              />
              <p>
                <Paragraph />
              </p>
            </div>
          </div>

          <div
            style={{
              flexShrink: 0,
              width: "90%", // Adjust the width as needed
              maxWidth: "900px", // Add a maximum width if desired
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              boxSizing: "border-box", // Add this property to include padding and border in the width
            }}
            onClick={openDetailView}
          >
            {/* Container content */}
            <div style={{ height: "500px", position: "relative" }}>
              <Image
                src="/everest-base-camp-10.jpg"
                alt="Travel Image"
                width={600}
                height={150}
              />
              <p>
                <Paragraph />
              </p>
            </div>
          </div>


          <div
            style={{
              flexShrink: 0,
              width: "90%", // Adjust the width as needed
              maxWidth: "900px", // Add a maximum width if desired
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              boxSizing: "border-box", // Add this property to include padding and border in the width
            }}
            onClick={openDetailView}
          >
            {/* Container content */}
            <div style={{ height: "500px", position: "relative" }}>
              <Image
                src="/images/istockphoto-866904464-612x612.jpg"
                alt="Travel Image"
                width={600}
                height={150}
              />
              <p>
                <Paragraph />
              </p>
            </div>
          </div>


          <div
            style={{
              flexShrink: 0,
              width: "90%", // Adjust the width as needed
              maxWidth: "900px", // Add a maximum width if desired
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              boxSizing: "border-box", // Add this property to include padding and border in the width
            }}
            onClick={openDetailView}
          >
            {/* Container content */}
            <div style={{ height: "500px", position: "relative" }}>
              <Image
                src="/images/coverimage.jpg"
                alt="Travel Image"
                width={600}
                height={150}
              />
              <p>
                <Paragraph />
              </p>
            </div>
          </div>



          <div
            style={{
              flexShrink: 0,
              width: "90%", // Adjust the width as needed
              maxWidth: "900px", // Add a maximum width if desired
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              boxSizing: "border-box", // Add this property to include padding and border in the width
            }}
            onClick={openDetailView}
          >
            {/* Container content */}
            <div style={{ height: "500px", position: "relative" }}>
              <Image
                src="/images/istockphoto-866904464-612x612.jpg"
                alt="Travel Image"
                width={600}
                height={150}
              />
              <p>
                <Paragraph />
              </p>
            </div>
          </div>

          <div
            style={{
              flexShrink: 0,
              width: "90%", // Adjust the width as needed
              maxWidth: "900px", // Add a maximum width if desired
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              boxSizing: "border-box", // Add this property to include padding and border in the width
            }}
            onClick={openDetailView}
          >
            {/* Container content */}
            <div style={{ height: "500px", position: "relative" }}>
              <Image
                src="/images/Mountains 1.jpg"
                alt="Travel Image"
                width={600}
                height={150}
              />
              <p>
                <Paragraph />
              </p>
            </div>
          </div>

          
          {/* Add more containers as needed */}
        </ScrollUp>
      </div>
    </>
  );
}

export default Blogs;
