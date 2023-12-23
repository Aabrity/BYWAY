"use client";

import Image from "next/image";
import React, { useState } from "react";
import ScrollableContainer from "@/Components/ScrollableContainer.";
import DetailView from "@/Components/DetailView";
import Paragraph from "@/Components/Paragraph";

function Blogs() {
  const [showDetailView, setShowDetailView] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);


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
        src="/everest-base-camp-10.jpg"
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
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "green"}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "transparent"} 
          >
            Search
          </button>
        </form>
      </div>
    </div>
    <div>
      <h1 style={{ fontSize: '40px', margin:'30px 0', padding:'10px'}}> 
        <b>
          Top Trending Blogs 
        </b>
      </h1>
    </div>
    {/* Scrollable Containers */}
    <ScrollableContainer>

      {/* COntainer number 1 */}

      <div>
      <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
        <div style={{ height: '500px', position: 'relative' }}>
          <Image src="/assets/pokhera thulokot.webp" alt="Pokhera" width={600} height={150} />
          <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
          <Paragraph />
        </div>
      </div>

      {showFullContent && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '100', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '80%', height: '80%', overflow: 'auto' }}>
            {/* Full content goes here */}
            <Image src="/assets/pokhera thulokot.webp" alt="Pokhera" width={600} height={150} />
            <b>The ABC trek</b>
            <Paragraph />
          </div>
        </div>
      )}
      <button onClick={toggleFullContent}>Read More</button>
    </div>

          {/* COntainer number 2 */}

  
        {/* Container number 1 */}
        <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
          <div style={{ height: '500px', position: 'relative' }}>
            <img src="/assets/pokhera thulokot.webp" alt="Pokhera" width={600} height={150} />
            <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
            {/* Display only a portion of the content initially */}
            {showFullContent ? (
              <>
              
                <p>{/* Your full content goes here */}</p>
                <button onClick={closeFullContent}>Close</button>
              </>
            ) : (
              <>
                <p>
                  This trek is also known as the Annapurna Sanctuary trek; Trail Follows winding trails along forested slopes and treks alongside rushing rivers of surpassing beauty as we approach Annapurna Base Camp on this uniquely accessible six-day itinerary.
      
      It's an incredible combination of diverse cultures and nature. This trip is more than just a trek that we will never forget.
      
      Annapurna Base Camp Trekking ABC is one of the most popular hikes in the world.
                </p>
                <button onClick={toggleFullContent}>Read More</button>
              </>
            )}
          </div>
        </div>

            {/* Container number 3 */}
            <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
          <div style={{ height: '500px', position: 'relative' }}>
            <img src="/images/Mountains 1.jpg" alt="Pokhera" width={600} height={150} />
            <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
            {/* Display only a portion of the content initially */}
            {showFullContent ? (
              <p> 
             </p>
            ) : (
              <>
                <p> This trek is also known as the Annapurna Sanctuary trek; Trail Follows winding trails along forested slopes and treks alongside rushing rivers of surpassing beauty as we approach Annapurna Base Camp on this uniquely accessible six-day itinerary.
      
      It's an incredible combination of diverse cultures and nature. This trip is more than just a trek that we will never forget.
      
      Annapurna Base Camp Trekking ABC is one of the most popular hikes in the world.</p>
                <button onClick={toggleFullContent}>Read More</button>
              </>
            )}
          </div>
        </div>

            {/* Container number 4 */}

            <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
          <div style={{ height: '500px', position: 'relative' }}>
            <img src="/everest-base-camp-10.jpg" alt="Pokhera" width={600} height={150} />
            <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
            {/* Display only a portion of the content initially */}
            {showFullContent ? (
              <>
                <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={closeFullContent}>Close</button>
                <p>{/* Your full content goes here */}</p>
              </>
            ) : (
              <>
                <p> This trek is also known as the Annapurna Sanctuary trek; Trail Follows winding trails along forested slopes and treks alongside rushing rivers of surpassing beauty as we approach Annapurna Base Camp on this uniquely accessible six-day itinerary.
      
      It's an incredible combination of diverse cultures and nature. This trip is more than just a trek that we will never forget.
      
      Annapurna Base Camp Trekking ABC is one of the most popular hikes in the world.</p>
                <button onClick={toggleFullContent}>Read More</button>
              </>
            )}
          </div>
        </div>
            {/* {The container 5} */}
            <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
          <div style={{ height: '500px', position: 'relative' }}>
            <img src="/assets/pokhera thulokot.webp" alt="Pokhera" width={600} height={150} />
            <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
            {/* Display only a portion of the content initially */}
            {showFullContent ? (
              <>
                <p>{/* Your full content goes here */}</p>
                <button onClick={closeFullContent}>Close</button>
              </>
            ) : (
              <>
                <p> This trek is also known as the Annapurna Sanctuary trek; Trail Follows winding trails along forested slopes and treks alongside rushing rivers of surpassing beauty as we approach Annapurna Base Camp on this uniquely accessible six-day itinerary.
      
      It's an incredible combination of diverse cultures and nature. This trip is more than just a trek that we will never forget.
      
      Annapurna Base Camp Trekking ABC is one of the most popular hikes in the world.</p>
                <button onClick={toggleFullContent}>Read More</button>
              </>
            )}
          </div>
        </div>

      </ScrollableContainer>
    <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Adjust as needed
    }}>
  <h1 style={{ fontSize: '40px', margin: '30px 0', padding: '10px' }}>
    <b>
      Recent Travels
    </b>
  </h1

  <ScrollableContainer >
    {/* Container for Recent Travels */}
    <div
      style={{
        flexShrink: 0,
        width: '90%', // Adjust the width as needed
        maxWidth: '900px', // Add a maximum width if desired
        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)',
        borderRadius: '10px',
        padding: '20px',
        cursor: 'pointer',
        boxSizing: 'border-box', // Add this property to include padding and border in the width
      }}
      onClick={openDetailView}
    >
      {/* Container content */}
      <div style={{ height: '500px', position: 'relative' }}>
        <Image src="/images/istockphoto-866904464-612x612.jpg" alt="Travel Image" width={600} height={150} />
        <p>
          <Paragraph/>
        </p>
      </div>
    </div>
    {/* Add more containers as needed */}
  </ScrollableContainer>
</div>

    </>
  );
}


export default Blogs;
