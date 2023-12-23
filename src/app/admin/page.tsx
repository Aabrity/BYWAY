"use client"
// Import required modules
import React, { useState } from 'react';
import axios from 'axios';

// Check if the document object is available (client-side)
const isBrowser = typeof window !== 'undefined';
const ReactQuill = isBrowser ? require('react-quill') : undefined;

import 'react-quill/dist/quill.snow.css';
import './style.css';

function AdminPage() {
  const [blogContent, setBlogContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('content', blogContent);

      if (imageFile) {
        formData.append('image', imageFile);
      }

      await axios.post('http://localhost:3001/api/post-blog', formData);

      console.log('Content posted successfully');
    } catch (error) {
      console.error('Error posting content:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  // Check if ReactQuill is defined before rendering
  if (!ReactQuill) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-12 text-white">
        {/* ... (your existing code for the sidebar) */}
      </div>

      {/* Add Blog Container */}
      <div className="flex-grow bg-778C49 p-12 mt-16">
        <div className="bg-green-200 p-6 rounded-lg h-full w-full">
          <h2 className="text-2xl font-semibold mb-4">Add Blog Post</h2>

          <div className="editorContainer">
            <label htmlFor="blogContent" className="block text-sm font-medium text-gray-600">
              Blog Content
            </label>
            
            {/* Render ReactQuill only on the client-side */}
            {ReactQuill && (
              <ReactQuill className="editor" theme="snow" value={blogContent} onChange={setBlogContent} />
            )}
          </div>

          {/* Displaying the image */}
          <input
            type="file"
            accept="image/*"
            className="mb-2"
            onChange={handleImageChange}
          />

          {imageFile && (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Uploaded"
              className="max-w-full h-auto mb-2"
            />
          )}

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-md"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
