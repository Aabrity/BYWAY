// Import required modules
"use client";
import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

function AdminPage() {
  const [blogContent, setBlogContent] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
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
        formData.append("image", imageFile);
      }

      await axios.post("http://localhost:8081/blogs/postblog", formData);

      console.log("Content posted successfully");
    } catch (error) {
      console.error("Error posting content:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };
  if (!ReactQuill) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/5 bg-gray-800 p-12 text-white">
      
      </div>

      <div className="flex-grow bg-778C49 p-12 mt-16">
        <div className="bg-green-200 p-6 rounded-lg h-full w-full">
          <h2 className="text-2xl font-semibold mb-4">Add Blog Post</h2>

          {/* Title Input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border rounded-md p-2 w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-600"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="border rounded-md p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
            <label
              htmlFor="blogContent"
              className="block text-sm font-medium text-gray-600"
            >
              Blog Content
            </label>
            {ReactQuill && (
              <div className="editor-wrapper">
                <ReactQuill
                  theme="snow"
                  value={blogContent}
                  onChange={setBlogContent}
                />
              </div>
            )}
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
              style={{ maxWidth: "300px", maxHeight: "200px" }}
            />
          )}

          {/* Post Button */}
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
