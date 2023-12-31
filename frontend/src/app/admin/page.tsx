// Import required modules
"use client"
import React, { useState } from 'react';
import axios from 'axios';
// Check if the document object is available (client-side)
import ReactQuill from 'react-quill';


import 'react-quill/dist/quill.snow.css';
import './style.css';

function AdminPage() {
  const [blogContent, setBlogContent] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');   
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [category, setCategory] = useState('Normal');
  

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);  
      formData.append('date', date);    
      formData.append('content', blogContent);
      formData.append('category', category);

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
      <div className="w-1/5 bg-gray-800 p-12 text-white">
      
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/assets/logos/logodark.png"
              width={100}
              alt="Byway Admin Portal"
            />
          </div>
          <h2 className="text-4xl dark:text-white font-bold text-center mt-10">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              type="email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          {/* the category  */}

          <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">
              Category
            </label>
            <select
              id="category"
              className="border rounded-md p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Normal">Normal</option>
              <option value="Trending">Trending</option>
            </select>
          </div>

          {/* Blog Content Input */}
          <div className="editorContainer mb-4 style={{ height: '600px' }}">
            <label htmlFor="blogContent" className="block text-sm font-medium text-gray-600">
              Blog Content
            </label>
            {ReactQuill && (
            <div className="editor-wrapper">
              <ReactQuill theme="snow" value={blogContent} onChange={setBlogContent} />
            </div>
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
              style={{ maxWidth: '300px', maxHeight: '200px' }}
            />
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-green-600 shadow-lg shadow-green-600/50 hover:shadow-green-500/80 text-white font-semibold rounded-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
