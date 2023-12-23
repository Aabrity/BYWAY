// BlogModal.js

import React from 'react';

const BlogModal = ({ onClose, blogData }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '80%',
          maxWidth: '800px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div style={{ height: '500px', position: 'relative' }}>
          <img
            src={blogData.image}
            alt={blogData.title}
            width={600}
            height={150}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {blogData.title}
          </h1>
          <small>Date: {blogData.date}</small>
          <p>{blogData.fullContent}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
