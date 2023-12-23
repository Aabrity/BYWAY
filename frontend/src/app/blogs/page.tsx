"use client";

import Image from "next/image";
import React, { useState } from "react";
import ScrollableContainer from "@/Components/ScrollableContainer.";

function Blogs() {
  const [showDetailView, setShowDetailView] = useState(false);

  const openDetailView = () => {
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
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
          width: "700px",
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

        <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px' }}>
          {/* Container 1 content */}
          <div style={{ height: '500px', position: 'relative' }}>
            <Image src="/assets/pokhera thulokot.webp" alt="Pokhera" width={600} height={150} />
            <p>
          <b>The ABC tre</b>typically kicks off in Nayapul, a bustling town on
          the outskirts of Pokhara. From here, trekkers embark on a journey
          that takes them through charming villages, terraced fields, and
          lush forests. The first leg of the trek introduces travelers to
          the warm hospitality of the locals and provides a glimpse into
          the rich culture of the region.
          </p>
          </div>
        </div>

        <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px' }}>
          {/* Container 2 content */}
          <div style={{ height: '500px', position: 'relative' }}>
            <Image src="/assets/ABC.jpg" alt="Pokhera" width={600} height={200} />
            <p>
        <b>"Pokhara"</b> a beautiful city in Nepal known for its stunning
        landscapes, including the serene Phewa Lake and the backdrop
        of the Annapurna mountain range? If so, I'd be happy to
        help you draft a blog about Pokhara. Let me know if you
        have any specific topics or themes you'd like to include
        in the blog, or if you'd like a general overview of the
        city and its attractions.
      </p>
          </div>
        </div>

        <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px' }}>
          {/* Container 1 content */}
          <div style={{ height: '500px', position: 'relative' }}>
            <Image src="/assets/pokhera thulokot.webp" alt="Pokhera" width={600} height={150} />
            <p>
          <b>The ABC tre</b>typically kicks off in Nayapul, a bustling town on
          the outskirts of Pokhara. From here, trekkers embark on a journey
          that takes them through charming villages, terraced fields, and
          lush forests. The first leg of the trek introduces travelers to
          the warm hospitality of the locals and provides a glimpse into
          the rich culture of the region.
          </p>
          </div>
        </div>

        <div style={{ flexShrink: 0, width: '500px', marginRight: '10px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px' }}>
          {/* Container 2 content */}
          <div style={{ height: '500px', position: 'relative' }}>
            <Image src="/assets/ABC.jpg" alt="Pokhera" width={600} height={200} />
            <p>
        <b>"Pokhara"</b> a beautiful city in Nepal known for its stunning
        landscapes, including the serene Phewa Lake and the backdrop
        of the Annapurna mountain range? If so, I'd be happy to
        help you draft a blog about Pokhara. Let me know if you
        have any specific topics or themes you'd like to include
        in the blog, or if you'd like a general overview of the
        city and its attractions.
      </p>
          </div>
        </div>
        <div>

        </div>

      </ScrollableContainer>
      <p>
      </p>

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
            <Image src="/everest-base-camp-10.jpg" alt="Travel Image" width={600} height={150} />
            <p>
            <b>1. Mountain views that leave you spellbound </b>

            The Annapurna range whets your appetite for mountain views right from Pokhara. This is even before you start 
            the trek. At Ghandruk, you get distinct views of Machapuchare, Annapurna South and Hiunchuli. Views of 
            different peaks of the Annapurna massif and Machapuchare stay with you all the way till Sinuwa. The tip of 
            Machapuchare teases you at Dovan. As you burst out of the forest past Himalaya and Deurali, Machapuchare 
            appears before you in its full glory.
            Machapuchare, the ‘fish tailed mountain’, is revered by the Nepalese for its exquisite beauty. It is believed 
            to be one of the homes of Lord Shiva. It has never been officially summitted! At the Machapuchare base camp, 
            in addition to Machapuchare, you will see Annapurna I, Annapurna South, Gangapurna and Hiunchuli up close.

            The Annapurna Base Camp is a small cluster of lodges opposite the Annapurna glacier. As you look up from the 
            edge of the glacier, you come face to face with the Annapurna massif. Annapurna I, III and South, Gangapurna, 
            Gandharvachuli and Machapuchare are all there to meet your gaze when your eyes rest upon them.
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