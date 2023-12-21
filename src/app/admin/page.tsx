"use client"
import React, { useState } from 'react';
import axios from 'axios';

const AdminPage: React.FC = () => {
  const [blogContent, setBlogContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('content', blogContent);

      if (imageFile) {
        formData.append('image', imageFile);
      }

      await axios.post('http://localhost:3000/api/storeContent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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

          <div className="mb-4">
            <label htmlFor="blogContent" className="block text-sm font-medium text-gray-600">
              Blog Content
            </label>
            <textarea
              id="blogContent"
              name="blogContent"
              rows={10}
              className="mt-1 p-2 w-full border rounded-md"
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            ></textarea>
          </div>

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
};


export default AdminPage;
