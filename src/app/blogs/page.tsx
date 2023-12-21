"use client";
import Link from "next/link";
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

          <div>
      <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
        <div style={{ height: '500px', position: 'relative' }}>
          <Image src="/images/coverimage.jpg" alt="CoverImage" width={600} height={150} />
          <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
          <Paragraph />
        </div>
      </div>

      {showFullContent && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '100', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '80%', height: '80%', overflow: 'auto' }}>
            {/* Full content goes here */}
            <Image src="/images/coverimage.jpg" alt="CoverImage" width={600} height={150} />
            <b>The ABC trek</b>
            <Paragraph />
          </div>
        </div>
      )}
      <button onClick={toggleFullContent}>Read More</button>
    </div>

            {/* Container number 3 */}
            <div>
      <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
        <div style={{ height: '500px', position: 'relative' }}>
          <Image src="/images/Mountains 1.jpg" alt="Mountaines" width={600} height={150} />
          <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
          <Paragraph />
        </div>
      </div>

      {showFullContent && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '100', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '80%', height: '80%', overflow: 'auto' }}>
            {/* Full content goes here */}
            <Image src="/images/Mountains 1.jpg" alt="Mountains" width={600} height={150} />
            <b>The ABC trek</b>
            <Paragraph />
          </div>
        </div>
      )}
      <button onClick={toggleFullContent}>Read More</button>
    </div>

            {/* Container number 4 */}

            <div>
      <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
        <div style={{ height: '500px', position: 'relative' }}>
          <Image src="/images/istockphoto-866904464-612x612.jpg" alt="Instock" width={600} height={150} />
          <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
          <Paragraph />
        </div>
      </div>

      {showFullContent && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '100', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '80%', height: '80%', overflow: 'auto' }}>
            {/* Full content goes here */}
            <Image src="/images/istockphoto-866904464-612x612.jpg" alt="Instock" width={600} height={150} />
            <b>The ABC trek</b>
            <Paragraph />
          </div>
        </div>
      )}
      <button onClick={toggleFullContent}>Read More</button>
    </div>

            {/* {The container 5} */}
        <div>
      <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px', overflow: 'hidden' }}>
        <div style={{ height: '500px', position: 'relative' }}>
          <Image src="/everest-base-camp-10.jpg" alt="Everest" width={600} height={150} />
          <b style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>The ABC trek</b>
          <Paragraph />
        </div>
      </div>

      {showFullContent && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '100', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '80%', height: '80%', overflow: 'auto' }}>
            {/* Full content goes here */}
            <Image src="/everest-base-camp-10.jpg" alt="Everest" width={600} height={150} />
            <b>The ABC trek</b>
            <Paragraph />
          </div>
        </div>
      )}
      <button onClick={toggleFullContent}>Read More</button>
    </div>

      </ScrollableContainer>

      <div>
      <h1 style={{ fontSize: '40px', margin:'30px 0', padding:'10px'}}> 
        <b>
          Recent Travels 
        </b>
      </h1>

      <ScrollableContainer>
        {/* Existing containers... */}

        {/* Container for Recent Travels */}
        <div
          style={{
            flexShrink: 0,
            width: '500px',
            marginRight: '10px',
            boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)',
            borderRadius: '10px',
            padding: '20px',
            cursor: 'pointer',
          }}
          onClick={openDetailView}
        >
          {/* Container content */}
          <div style={{ height: '500px', position: 'relative' }}>
            <Image src="/assets/travel-image.jpg" alt="Travel Image" width={600} height={150} />
            <p>
              {/* Add content here */}
            </p>
          </div>
        </div>

        {/* Add more containers as needed */}
      </ScrollableContainer>

      {/* Recent Travels Detail View */}
      {showDetailView && <DetailView onClose={closeDetailView} />}

    </div>
    </>
  );
}


export default Blogs;
